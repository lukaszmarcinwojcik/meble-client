import React from "react";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <menu className="menubar">
      <a href="#banner">HOME</a>
      <a href="#shop">KATALOG</a>
      <a href="#blog">BLOG</a>
      <a href="#newsletter">NEWSLETTER</a>
      <a href="#aboutus">O NAS</a>
    </menu>
  );
};

export default MenuBar;
