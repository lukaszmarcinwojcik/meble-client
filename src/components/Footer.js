import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="kontener">
        <div className={"kolumna"}>
          <h3>MEBLE KLASYCZNE</h3>
          <p>27-862 Kraków</p>
          <p>ulica Meblowa 26/6</p>
        </div>
        <div className={"kolumna"}>
          <h3>ZNAJDZIESZ NAS NA</h3>
          <div className={"media"}>
            <div className={"ikona"}>
              <p>Fb</p>
            </div>
            <div className={"ikona"}>
              <p>Tw</p>
            </div>
            <div className={"ikona"}>
              <p>In</p>
            </div>
          </div>
        </div>
        <div className={"kolumna"}>
          <h3>GODZINY OTWARCIA</h3>
          <p>Pon-Pt: 9:00 - 17:00</p>
          <p>Sob-Nd: 9:00 - 13:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
