import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className={"column"}>
          <h3>MEBLE KLASYCZNE</h3>
          <p>27-862 Kraków</p>
          <p>ulica Meblowa 26/6</p>
        </div>

        <div className={"column"}>
          <h3>ZNAJDZIESZ NAS NA</h3>
          <div className={"media"}>
            <a href="#footer" className={"iconFb"}>
              ""
            </a>

            <a href="#footer" className={"iconTw"}>
              ""
            </a>
            <a href="#footer" className={"iconIn"}>
              ""
            </a>
          </div>
        </div>

        <div className={"column"}>
          <h3>GODZINY OTWARCIA</h3>
          <p>Pon-Pt: 9:00 - 17:00</p>
          <p>Sob-Nd: 9:00 - 13:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
