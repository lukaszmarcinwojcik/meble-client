import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <h2 className="titlenav">MEBLE KLASYCZNE </h2>
      <button className={"logowanie"} onClick={props.handleShowLoginPanel}>
        {props.isActiveLogPanel ? "ZAMKNIJ" : "LOGOWANIE"}
      </button>
    </nav>
  );
};

export default NavBar;
