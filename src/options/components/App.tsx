import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import React, { useEffect, useState } from "react";
import TableRender from "./TableRender";

function createData(date: string, day: string, tasks: string[], hours: number) {
  return { date, day, tasks, hours };
}

export default function App() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    chrome.storage.local.get((res) => {
      if (res.username) {
        getData(res.username);
      }
    });
  }, []);

  const getData = async (username) => {
    setIsLoading(true);
    const response = await fetch(
      `https://weekly-report-manager-default-rtdb.firebaseio.com/${username}.json`
    );
    const data = await response.json();
    if (data) {
      const today = moment();
      const fromDate = today
        .day(today.day() >= 5 ? 5 : -2)
        .format("YYYY-MM-DD");
      const toDate = today
        .add((4 - today.day() + 7) % 7, "days")
        .format("YYYY-MM-DD");
      const currentTimeline: any = data[`${fromDate}|${toDate}`];
      if (currentTimeline) {
        for (const key in currentTimeline) {
          const dayWork: any = Object.values(currentTimeline[key])[0];
          setRows((rows) => {
            return [
              ...rows,
              createData(
                key.split("|")[0],
                key.split("|")[1],
                dayWork.tasks,
                dayWork.hours
              ),
            ];
          });
        }
      }
    }
    setIsLoading(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Your Weekly Report</h1>
      {isLoading ? (
        <CircularProgress />
      ) : rows.length > 0 ? (
        <TableRender rows={rows} />
      ) : (
        <h3>No Data Found</h3>
      )}
    </div>
  );
}
