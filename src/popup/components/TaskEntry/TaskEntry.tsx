import React, { useEffect, useRef, useState } from "react";
import "./TaskEntry.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button, { ButtonProps } from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import { sendDayReport } from "../sendDayReportHelper";
import CircularProgress from "@mui/material/CircularProgress";

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
  const [filledToday, setFilledToday] = useState(false);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    chrome.storage.local.get((res) => {
      setFilledToday(res.filledToday);
      setHours(res.hours || 0);
      setEntries(res.entries?.length > 0 ? res.entries : [""]);
    });
  }, []);

  const handleChange = (e, i) => {
    const newEntries = [...entries];
    newEntries[i] = e.target.value;
    setEntries(newEntries);
  };

  const sendReport = async () => {
    setSendingData(true);
    const res = await sendDayReport(props.username, entries, hours);
    if (res.status === 200) {
      setEntries([""]);
      setFilledToday(true);
      chrome.storage.local.set({
        hours: null,
        entries: null,
        filledToday: true,
      });
    }
    setSendingData(false);
  };

  const saveInCache = (_) =>
    chrome.storage.local.set({
      hours,
      entries: entries.filter((entry) => entry.trim().length),
    });

  if (filledToday) {
    return (
      <div
        style={{
          width: "350px",
          minHeight: "250px",
          backgroundColor: "rgb(50, 50, 50)",
          color: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Today's Report Submitted!</h1>
      </div>
    );
  }

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
      {entries.map((entry, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {index == entries.length - 1 ? (
              <AddCircleIcon
                onClick={() => setEntries((entries) => [...entries, ""])}
                style={{
                  margin: "5px 0px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  margin: "5px 0px",
                }}
              >
                {index + 1}
              </div>
            )}
            <textarea
              rows={2}
              className="task-input"
              placeholder={`Task ${index + 1}`}
              value={entry}
              onChange={(e) => handleChange(e, index)}
              onBlur={saveInCache}
            />
            {entries.length != 1 && (
              <RemoveCircleIcon
                onClick={() =>
                  setEntries((entries) => entries.filter((_, i) => i != index))
                }
                style={{
                  margin: "5px 0px",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
        );
      })}
      <div>
        <label
          style={{
            fontSize: "15px",
            marginRight: "15px",
          }}
        >
          Hours
        </label>
        <input
          type="number"
          className="hours-input"
          min={0}
          max={24}
          value={hours}
          onChange={(e) => setHours(+e.target.value)}
          onBlur={saveInCache}
        ></input>
      </div>
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
              hours == 0 ||
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
