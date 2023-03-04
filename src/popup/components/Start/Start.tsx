import React from "react";
import "./start.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StartIcon from "@mui/icons-material/Start";

function Start(props) {
  return (
    <div
      style={{
        width: "350px",
        height: "250px",
        backgroundColor: "rgb(50, 50, 50)",
        color: "whitesmoke",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          paddingTop: "20px",
        }}
      >
        {props.heading}
      </h1>
      <h2
        style={{
          marginTop: "45px",
          marginBottom: "20px",
        }}
      >
        {props.subHeading}
      </h2>
      <form
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <input
          className="name-input"
          type={props.inputType}
          placeholder="Enter your name"
          required
          ref={props.inputRef}
          style={{
            width: props.inputType === "time" && "50%",
          }}
        />
        <button
          type="submit"
          style={{
            color: "yellow",
            backgroundColor: "inherit",
            border: "none",
            cursor: "pointer",
          }}
          onClick={props.onSave}
        >
          {props.inputType === "time" ? <StartIcon /> : <ArrowForwardIosIcon />}
        </button>
      </form>
    </div>
  );
}

export default Start;
