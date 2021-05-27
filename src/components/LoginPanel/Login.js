import React from "react";
// import "./DeleteEditProdukt.css";

class Login extends React.Component {
  state = {};
  render() {
    const formlogout = (
      <div>
        <h2>Jestes zalogowany jako administrator</h2>
        <button
          className={"btnform"}
          type={"submit"}
          onClick={this.props.handleLogout}
        >
          WYLOGUJ
        </button>
      </div>
    );
    const formlog = (
      <form onSubmit={this.props.handleLoginSubmit}>
        <h2>
          Nie masz konta?{" "}
          <span className={"reglogbtn"} onClick={this.props.handleSwitchLogReg}>
            Zarejestruj się
          </span>
        </h2>
        <label className={"loginlabel"} htmlFor="user">
          Wprowadz login:
          <input
            className={"logPanel"}
            type="text"
            id="user"
            name="username"
            value={this.props.username}
            onChange={this.props.handleLoginChange}
          />
        </label>
        <label className={"loginlabel"} htmlFor="password">
          Wprowadz haslo:
          <input
            className={"logPanel"}
            type="password"
            id="password"
            name="password"
            value={this.props.password}
            onChange={this.props.handleLoginChange}
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
      // <div isactive={this.props.isactive}>
      <div>
        {this.props.islogged ? formlogout : formlog}
        <button className={"btnform"} onClick={this.props.handleShowLoginPanel}>
          Zamknij
        </button>
        <h2 className={"msg"}>{this.props.loginMessage}</h2>
      </div>
    );
  }
}
export default Login;
