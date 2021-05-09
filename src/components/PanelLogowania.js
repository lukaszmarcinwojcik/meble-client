import React from "react";
import "./PanelLogowania.css";

const PanelLogowania = (props) => {
  const formlogout = (
    <div>
      <h2>Jestes zalogowany jako administrator</h2>
      <button
        className={"btnform"}
        type={"submit"}
        onClick={props.handleLogout}
      >
        WYLOGUJ
      </button>
    </div>
  );
  const formlog = (
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
  );
  return (
    <div className={"panelLogowania"} isactive={props.isactive}>
      {props.islogged ? formlogout : formlog}
      <button className={"btnform"} onClick={props.handleShowLoginPanel}>
        Zamknij
      </button>
      <h2 className={"msg"}>{props.loginMessage}</h2>
    </div>
  );
};

export default PanelLogowania;
