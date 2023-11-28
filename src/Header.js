import React, { useContext } from "react";
import logo from "./media/logo.png";
import { ThemeContext } from "./App";

export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <header style={{ color: theme === "dark" ? "#cbd4c2" : "#282828" }}>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <h1>
            Shop<span>Friend</span>
          </h1>
          <h2>
            Shopping Made <span>Simple</span>
          </h2>
        </div>
      </header>
    </>
  );
}
