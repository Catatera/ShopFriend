import React from "react";
import logo from "./media/logo.png"
export default function Header() {
  return (
    <>
      <header>
        <div>
          <img src={logo}></img>
        </div>
        <div>
          <h1>Shop<span>Friend</span></h1>
          <h2>Shopping Made <span>Simple</span></h2>
        </div>
      </header>
    </>
  );
}
