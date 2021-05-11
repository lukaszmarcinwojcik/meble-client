import React from "react";
import "./DeleteEditProdukt.css";

const DeleteEditProdukt = (props) => {
  return (
    <div className={"adminpanel"}>
      <button className={"adminpanelbtn"}>USUN</button>
      <button className={"adminpanelbtn"}>EDYTUJ</button>
    </div>
  );
};

export default DeleteEditProdukt;
