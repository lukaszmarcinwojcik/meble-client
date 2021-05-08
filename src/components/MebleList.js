import React from "react";
import "./MebleList.css";

const MebleList = (props) => {
  const paneladministratora = (
    <div>
      <h3>
        PANEL ADMINISTRATORA <button>USUN</button>
        <button>EDYTUJ</button>
      </h3>
    </div>
  );

  const meble = props.meble.map((mebel) => (
    <div className={"mebel"} key={mebel._id}>
      <h2>{`${mebel.nazwa}`}</h2>
      <h2>{`kolekcja: ${mebel.kolekcja}`}</h2>
      <h2>{`materiał: ${mebel.material}`}</h2>
      <h2>{`pomieszczenie: ${mebel.pomieszczenie}`}</h2>
      <h2>{`${mebel.date}`}</h2>
      {props.poziomDostepu === 3 ? paneladministratora : null}
    </div>
  ));
  return (
    <div className="mebleList">
      <h2>KATALOG MEBLI</h2>
      {meble}
    </div>
  );
};

export default MebleList;
