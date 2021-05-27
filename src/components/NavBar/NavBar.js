import React from "react";
import "./NavBar.css";
import "./MenuBar";
import MenuBar from "./MenuBar";

class NavBar extends React.Component {
  state = { isActiveMenu: false };

  handleShowMenu = () => {
    this.setState({
      isActiveMenu: !this.state.isActiveMenu,
    });
  };
  render() {
    return (
      <nav className="navbar">
        <h2 className="titlenav">MEBLE KLASYCZNE </h2>
        <button className={"menubtn"} onClick={this.handleShowMenu}>
          {this.state.isActiveLogPanel ? "ZAMKNIJ" : "MENU"}
        </button>
        <button
          className={"logowanie"}
          onClick={this.props.handleShowLoginPanel}
        >
          {this.props.isActiveLogPanel ? "ZAMKNIJ" : "LOGOWANIE"}
        </button>
        {this.state.isActiveMenu ? <MenuBar /> : null}
      </nav>
    );
  }
}

export default NavBar;
