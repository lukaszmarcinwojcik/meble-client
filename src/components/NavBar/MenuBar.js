import React from "react";
import "./MenuBar.css";

const MenuBar = (props) => {
  return (
    <menu className="menubar">
      <a href="#banner" onClick={props.handleShowMenu}>
        HOME
      </a>
      <a href="#shop" onClick={props.handleShowMenu}>
        KATALOG
      </a>
      <a href="#gallery">NASZE PROJEKTY</a>
      <a href="#blog" onClick={props.handleShowMenu}>
        BLOG
      </a>
      <a href="#newsletter" onClick={props.handleShowMenu}>
        NEWSLETTER
      </a>
      <a href="#aboutus" onClick={props.handleShowMenu}>
        O NAS
      </a>
    </menu>
  );
};

export default MenuBar;
