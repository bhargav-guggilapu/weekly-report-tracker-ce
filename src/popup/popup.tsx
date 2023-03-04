import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import App from "./components/App";

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
