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
        <div className={"menubtn"} onClick={this.handleShowMenu}></div>
        <div
          className={"loginbtn"}
          onClick={this.props.handleShowLoginPanel}
        ></div>
        {this.state.isActiveMenu ? (
          <MenuBar handleShowMenu={this.handleShowMenu} />
        ) : null}
        <span className={"scrollTopButton"}></span>
        <a href="#banner" className={"scrollTopButton"}>
          <span></span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
