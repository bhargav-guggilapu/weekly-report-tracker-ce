import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "./TasksField.css";

function TasksField({
  entries,
  setEntries,
  saveInCache = (_: any) => {},
  hours,
  setHours,
}) {
  const handleChange = (e, i) => {
    const newEntries = [...entries];
    newEntries[i] = e.target.value;
    setEntries(newEntries);
  };

  return (
    <>
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
    </>
  );
}

export default TasksField;
