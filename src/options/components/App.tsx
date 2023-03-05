import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { getCurrentTimeline } from "../../popup/components/sendDayReportHelper";
import TableRender from "./TableRender";
import "./App.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Button, { ButtonProps } from "@mui/material/Button";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";

function createData(date: string, day: string, tasks: string[], hours: number) {
  return { date, day, tasks, hours };
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  "&:hover": {
    backgroundColor: yellow[700],
  },
  "&:disabled": {
    backgroundColor: yellow[300],
  },
}));

export default function App() {
  const [currentUserRows, setCurrentUserRows] = useState([]);
  const [remainingUserRows, setRemainingUserRows] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    chrome.storage.local.get((res) => {
      setCurrentUser(res.username);
      getData(res.username);
    });
  }, []);

  const getData = async (username) => {
    setIsLoading(true);
    const response = await fetch(
      `https://weekly-report-manager-default-rtdb.firebaseio.com/.json`
    );
    const data = await response.json();
    if (data) {
      for (const user in data) {
        if (user == username) {
          generateTable({ userData: data[user], user }, true);
        } else {
          generateTable({ userData: data[user], user });
        }
      }
    }
    setIsLoading(false);
  };

  const generateTable = (userObject, currentUser?) => {
    if (userObject.userData) {
      const currentTimelineData: any =
        userObject.userData[getCurrentTimeline()];
      if (currentTimelineData) {
        for (const dayName in currentTimelineData) {
          const dayWork: any = currentTimelineData[dayName];
          if (currentUser) {
            setCurrentUserRows((rows) => generateData(rows, dayName, dayWork));
          } else {
            setRemainingUserRows((userRows) => {
              return {
                ...userRows,
                [userObject.user]: generateData(
                  userRows[userObject.user] || [],
                  dayName,
                  dayWork
                ),
              };
            });
          }
        }
      }
    }
  };

  const generateData = (rows, dayName, dayWork) => {
    return [
      ...rows,
      createData(
        dayName.split("|")[0],
        dayName.split("|")[1],
        dayWork.tasks,
        dayWork.hours
      ),
    ];
  };

  const saveAsPdf = () => {
    const doc = new jsPDF({});
    doc.text(`Weekly Report for ${getCurrentTimeline()}`, 15, 10);

    if (currentUserRows.length > 0) {
      autoTable(doc, {
        bodyStyles: {
          lineColor: "black",
          lineWidth: 0.1,
        },
        headStyles: {
          fillColor: "black",
          lineColor: "black",
          lineWidth: 0.1,
        },
        margin: { top: 20 },
        head: [["Name", "Date", "Tasks", "Hours"]],
        body: currentUserRows.map((row) => [
          currentUser,
          row.date + " (" + row.day + ")",
          row.tasks ? row.tasks.join("\n\n") : "NOT FILLED",
          row.hours || 0,
        ]),
      });
    }

    for (const user in remainingUserRows) {
      if (remainingUserRows[user].length > 0) {
        autoTable(doc, {
          bodyStyles: {
            lineColor: "black",
            lineWidth: 0.1,
          },
          headStyles: {
            fillColor: "black",
            lineColor: "black",
            lineWidth: 0.1,
          },
          head: [["Name", "Date", "Tasks", "Hours"]],
          body: remainingUserRows[user].map((row) => [
            user,
            row.date + " (" + row.day + ")",
            row.tasks ? row.tasks.join("\n\n") : "NOT FILLED",
            row.hours || 0,
          ]),
        });
      }
    }

    doc.save(`${getCurrentTimeline()}.pdf`);
  };

  return (
    <>
      <div className="table-alignment">
        <ColorButton
          variant="contained"
          endIcon={<DownloadForOfflineIcon />}
          onClick={saveAsPdf}
          disabled={isLoading}
        >
          Download As PDF
        </ColorButton>
        <h1>Your Weekly Report</h1>
        {isLoading ? (
          <CircularProgress />
        ) : currentUserRows.length > 0 ? (
          <TableRender rows={currentUserRows} />
        ) : (
          <h3>No Data Found</h3>
        )}
      </div>

      <div
        className="table-alignment"
        style={{
          marginTop: "30px",
        }}
      >
        <h1>Others Weekly Reports</h1>
        {isLoading ? (
          <CircularProgress />
        ) : Object.keys(remainingUserRows).length > 0 ? (
          Object.keys(remainingUserRows).map((user, i) => {
            return (
              <div key={i}>
                <h3>{user}</h3>
                <TableRender rows={remainingUserRows[user]} />
              </div>
            );
          })
        ) : (
          <h3>No Data Found</h3>
        )}
      </div>
    </>
  );
}
