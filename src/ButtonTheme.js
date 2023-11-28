import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function ButtonTheme(props) {
  const theme = useContext(ThemeContext);

  return theme === "dark" ? (
    <button onClick={props.onToggleTheme} style={{ background: "#ffffff" }}>
      &#127774;
    </button>
  ) : (
    <button onClick={props.onToggleTheme} style={{ background: "#282828" }}>
      &#127771;
    </button>
  );
}
