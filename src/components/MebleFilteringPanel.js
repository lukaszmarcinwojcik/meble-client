import React from "react";
import "./MebleFilteringPanel.css";

const MebleFilteringPanel = (props) => {
  const kolekcje = props.kolekcje.map((kolekcja) => (
    <option key={kolekcja._id} value={kolekcja.nazwa}>
      {kolekcja.nazwa}
    </option>
  ));
  const materialy = props.materialy.map((material) => (
    <option key={material._id} value={material.nazwa}>
      {material.nazwa}
    </option>
  ));
  const pomieszczenia = props.pomieszczenia.map((pomieszczenie) => (
    <option key={pomieszczenie._id} value={pomieszczenie.nazwa}>
      {pomieszczenie.nazwa}
    </option>
  ));
  const rodzaje = props.rodzaje.map((rodzaj) => (
    <option key={rodzaj._id} value={rodzaj.nazwa}>
      {rodzaj.nazwa}
    </option>
  ));

  return (
    <div className="mebleFilteringPanel">
      <div className={"paneloption"}>
        <h2>Panel filtrowania mebli</h2>
      </div>
      <div>
        <div className={"paneloption"}>
          <label htmlFor="kolekcja">Wybierz kolekcje: </label>
          <select name={"kolekcja"} onChange={props.handleFilteringChange}>
            <option value={""}>wybierz</option>
            {kolekcje}
          </select>
        </div>

        <div className={"paneloption"}>
          <label htmlFor="material">Wybierz material: </label>
          <select name={"material"} onChange={props.handleFilteringChange}>
            <option value={""}>wybierz</option>
            {materialy}
          </select>
        </div>
        <div className={"paneloption"}>
          <label htmlFor="pomieszczenie">Wybierz pomieszczenie: </label>
          <select name={"pomieszczenie"} onChange={props.handleFilteringChange}>
            <option value={""}>wybierz</option>
            {pomieszczenia}
          </select>
        </div>
        <div className={"paneloption"}>
          <label htmlFor="rodzaj">Wybierz rodzaj: </label>
          <select name="rodzaj" onChange={props.handleFilteringChange}>
            <option value={""}>wybierz</option>
            {rodzaje}
          </select>
        </div>
        <div className={"paneloption"}>
          {" "}
          <button onClick={props.handleDeleteFilters}>Pokaz wszystkie</button>
          <button className={"szukaj"} onClick={props.handleFilteringSubmit}>
            Szukaj
          </button>
        </div>
      </div>
    </div>
  );
};

export default MebleFilteringPanel;
