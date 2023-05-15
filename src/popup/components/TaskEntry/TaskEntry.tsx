import React, { useEffect, useState } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import { sendDayReport } from "../sendDayReportHelper";
import CircularProgress from "@mui/material/CircularProgress";
import TasksField from "./TasksField";

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

function TaskEntry(props) {
  const [entries, setEntries] = useState([""]);
  const [sendingData, setSendingData] = useState(false);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    chrome.storage.local.get((res) => {
      setHours(res.hours || 0);
      setEntries(res.entries?.length > 0 ? res.entries : [""]);
    });
  }, []);

  const sendReport = async () => {
    setSendingData(true);
    const res = await sendDayReport(
      props.username,
      entries.filter((entry) => entry.trim().length),
      hours
    );
    if (res.status === 200) {
      setEntries([""]);
      setHours(0);
      chrome.storage.local.set({
        hours: null,
        entries: null,
      });
    }
    setSendingData(false);
  };

  const saveInCache = (_) => {
    chrome.storage.local.set({
      hours,
      entries: entries.filter((entry) => entry.trim().length),
    });
  };

  return (
    <div
      style={{
        width: "350px",
        minHeight: "250px",
        backgroundColor: "rgb(50, 50, 50)",
        color: "whitesmoke",
        textAlign: "center",
        padding: "20px",
        paddingBottom: "50px",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        What did you do today?
      </h1>
      <TasksField
        entries={entries}
        setEntries={setEntries}
        hours={hours}
        setHours={setHours}
        saveInCache={saveInCache}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: "5px",
          right: "3px",
          zIndex: 1,
        }}
      >
        {sendingData ? (
          <CircularProgress />
        ) : (
          <ColorButton
            variant="contained"
            endIcon={<SendIcon />}
            onClick={sendReport}
            disabled={
              entries.filter((entry) => entry.trim().length).length == 0 ||
              hours < 0 ||
              hours > 24 ||
              sendingData
            }
          >
            Send
          </ColorButton>
        )}
      </div>
    </div>
  );
}

export default TaskEntry;
