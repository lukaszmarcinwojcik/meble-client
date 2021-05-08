import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  const panellogowania = (
    <form>
      <h2>Masz już konto?! Zaloguj się!</h2>
      <label htmlfor="user">
        Wprowadz login:
        <input
          type="text"
          id="user"
          name="username"
          value={props.username}
          onChange={props.handleLoginChange}
        />
      </label>
      <label htmlfor="password">
        Wprowadz haslo:
        <input
          type="text"
          id="password"
          name="password"
          value={props.password}
          onChange={props.handleLoginChange}
        />
      </label>
    </form>
  );

  return (
    <nav className="navbar">
      <h2 className="titlenav">MEBLE KLASYCZNE </h2>
      <button className={"logowanie"}>LOGOWANIE</button>
      <div className={"panelLogowania"}>{panellogowania}</div>
    </nav>
  );
};

export default NavBar;
