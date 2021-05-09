import React from "react";
import "./MebleFilteringPanel.css";

class MebleFilteringPanel extends React.Component {
  state = {};

  render() {
    let kolekcje = [{ _id: -1, nazwa: "wybierz" }].concat(this.props.kolekcje);
    kolekcje = kolekcje.map((kolekcja) => (
      <option key={kolekcja._id} value={kolekcja.nazwa}>
        {kolekcja.nazwa}
      </option>
    ));
    let materialy = [{ _id: -1, nazwa: "wybierz" }].concat(
      this.props.materialy
    );
    materialy = materialy.map((material) => (
      <option key={material._id} value={material.nazwa}>
        {material.nazwa}
      </option>
    ));
    let pomieszczenia = [{ _id: -1, nazwa: "wybierz" }].concat(
      this.props.pomieszczenia
    );
    pomieszczenia = pomieszczenia.map((pomieszczenie) => (
      <option key={pomieszczenie._id} value={pomieszczenie.nazwa}>
        {pomieszczenie.nazwa}
      </option>
    ));
    let rodzaje = [{ _id: -1, nazwa: "wybierz" }].concat(this.props.rodzaje);
    rodzaje = rodzaje.map((rodzaj) => (
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
            <select
              value={this.props.kolekcja}
              name={"kolekcja"}
              onChange={this.props.handleFilteringChange}
            >
              {kolekcje}
            </select>
          </div>

          <div className={"paneloption"}>
            <label htmlFor="material">Wybierz material: </label>
            <select
              value={this.props.material}
              name={"material"}
              onChange={this.props.handleFilteringChange}
            >
              {materialy}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="pomieszczenie">Wybierz pomieszczenie:</label>
            <select
              value={this.props.pomieszczenie}
              name={"pomieszczenie"}
              onChange={this.props.handleFilteringChange}
            >
              {pomieszczenia}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="rodzaj">Wybierz rodzaj: </label>
            <select
              value={this.props.rodzaj}
              name="rodzaj"
              onChange={this.props.handleFilteringChange}
            >
              {rodzaje}
            </select>
          </div>
          <div className={"paneloption"}>
            {" "}
            <button onClick={this.props.handleDeleteFilters}>
              Pokaz wszystkie
            </button>
            <button
              className={"szukaj"}
              onClick={this.props.handleFilteringSubmit}
            >
              Szukaj
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MebleFilteringPanel;
