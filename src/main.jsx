import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <HashRouter hashType="hashbang">
      <App />
    </HashRouter>
  </React.Fragment>
);
