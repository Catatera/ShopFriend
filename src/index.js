import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "production") {
  console.log("App running in production mode");
}