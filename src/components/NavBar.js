import React from "react";
import "./NavBar.css";

const PanelLogowania = (props) => {
  return (
    <div className={"panelLogowania"} isactive={props.isactive}>
      <form onSubmit={props.handleLoginSubmit}>
        <h2>Masz już konto?! Zaloguj się!</h2>
        <label htmlFor="user">
          Wprowadz login:
          <input
            type="text"
            id="user"
            name="username"
            value={props.username}
            onChange={props.handleLoginChange}
          />
        </label>
        <label htmlFor="password">
          Wprowadz haslo:
          <input
            type="text"
            id="password"
            name="password"
            value={props.password}
            onChange={props.handleLoginChange}
          />
        </label>
        <div>
          <button className={"btnform"} type={"submit"}>
            ZALOGUJ
          </button>
        </div>
      </form>
      <button className={"btnform"} onClick={props.handleShowLoginPanel}>
        Zamknij
      </button>
    </div>
  );
};

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <h2 className="titlenav">MEBLE KLASYCZNE </h2>
      <button className={"logowanie"} onClick={props.handleShowLoginPanel}>
        {props.isactive ? "ZAMKNIJ" : "LOGOWANIE"}
      </button>
      {props.isactive ? (
        <PanelLogowania
          username={props.username}
          password={props.password}
          handleLoginChange={props.handleLoginChange}
          handleShowLoginPanel={props.handleShowLoginPanel}
          handleLoginSubmit={props.handleLoginSubmit}
        />
      ) : null}
    </nav>
  );
};

export default NavBar;
