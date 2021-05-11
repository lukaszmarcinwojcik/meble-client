import React from "react";
import "./MebleList.css";
import AddProdukt from "./AdminPanel/AddProdukt";
import EdytujParametry from "./AdminPanel/EdytujParametry";
import DeleteEditProdukt from "./AdminPanel/DeleteEditProdukt";

const MebleList = (props) => {
  const dodajNowyMebel = (
    <button onClick={props.showAddProduktPanel} className={"addNewMebel"}>
      DODAJ NOWY PRODUKT
    </button>
  );

  const edytujParametry = (
    <button onClick={props.showEdytujParametry} className={"addNewMebel"}>
      EDYTUJ PARAMETRY MEBLI
    </button>
  );

  const meble = props.meble.map((mebel) => (
    <div className={"mebel"} key={mebel._id}>
      <h2 className={"mebeltitle"}>{`${mebel.nazwa}`}</h2>
      <div className={"mebleDescription"}>
        <p>
          {"kolekcja: "}
          <span>{mebel.kolekcja}</span>
        </p>
        <p>
          {"materiał: "}
          <span>{mebel.material}</span>
        </p>
        <p>
          {"pomieszczenie: "}
          <span>{mebel.pomieszczenie}</span>
        </p>
        <p>{`${mebel.date}`}</p>
      </div>
      <div className={"mebelImg"}></div>
      {props.poziomDostepu === 3 ? <DeleteEditProdukt /> : null}
    </div>
  ));
  return (
    <div className="mebleList">
      <div className={"mebleListTitle"}>
        <h2>KATALOG MEBLI</h2>
        {props.poziomDostepu === 3 ? dodajNowyMebel : null}
        {props.poziomDostepu === 3 ? edytujParametry : null}
        {props.addProduktPanelIsActive ? (
          <AddProdukt showAddProduktPanel={props.showAddProduktPanel} />
        ) : null}
        {props.edytujParametryIsActive ? (
          <EdytujParametry showEdytujParametry={props.showEdytujParametry} />
        ) : null}
      </div>
      {meble}
    </div>
  );
};

export default MebleList;
