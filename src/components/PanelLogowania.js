import React from "react";
import "./PanelLogowania.css";

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
            type="password"
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
      <div>{props.loginMessage}</div>
    </div>
  );
};

export default PanelLogowania;
