import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function ButtonTheme(props) {
  const theme = useContext(ThemeContext);
  console.log({ theme });
  return (
    <button
      onClick={props.onToggleTheme}
    >
      TROCAR TEMA
    </button>
  );
}
