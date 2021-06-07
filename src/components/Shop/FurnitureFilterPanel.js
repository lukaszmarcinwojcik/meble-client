import React from "react";
import "./FurnitureFilterPanel.css";

class FurnitureFilterPanel extends React.Component {
  state = {};

  render() {
    let kolekcje = [{ _id: -1, name: "" }].concat(this.props.collectionList);
    kolekcje = kolekcje.map((collection) => (
      <option key={collection._id} value={collection.name}>
        {collection.name}
      </option>
    ));
    let materialy = [{ _id: -1, name: "" }].concat(this.props.materialList);
    materialy = materialy.map((material) => (
      <option key={material._id} value={material.name}>
        {material.name}
      </option>
    ));
    let pomieszczenia = [{ _id: -1, name: "" }].concat(this.props.roomList);
    pomieszczenia = pomieszczenia.map((room) => (
      <option key={room._id} value={room.name}>
        {room.name}
      </option>
    ));
    let rodzaje = [{ _id: -1, name: "" }].concat(this.props.typeList);
    rodzaje = rodzaje.map((type) => (
      <option key={type._id} value={type.name}>
        {type.name}
      </option>
    ));
    return (
      <div className="mebleFilteringPanel">
        <div className={"paneloption"}>
          <h2>Panel filtrowania mebli</h2>
        </div>
        <div>
          <div className={"paneloption"}>
            <label htmlFor="activeCollection">Wybierz kolekcje: </label>
            <select
              className={"selectfilterPanel"}
              value={this.props.activeCollection}
              name={"activeCollection"}
              onChange={this.props.handleFilteringChange}
            >
              {kolekcje}
            </select>
          </div>

          <div className={"paneloption"}>
            <label htmlFor="activeMaterial">Wybierz material: </label>
            <select
              className={"selectfilterPanel"}
              value={this.props.activeMaterial}
              name={"activeMaterial"}
              onChange={this.props.handleFilteringChange}
            >
              {materialy}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeRoom">Wybierz pomieszczenie: </label>
            <select
              className={"selectfilterPanel"}
              value={this.props.activeRoom}
              name={"activeRoom"}
              onChange={this.props.handleFilteringChange}
            >
              {pomieszczenia}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeType">Wybierz rodzaj: </label>
            <select
              className={"selectfilterPanel"}
              value={this.props.activeType}
              name="activeType"
              onChange={this.props.handleFilteringChange}
            >
              {rodzaje}
            </select>
          </div>
          <div className={"paneloption"}>
            <button
              className={"butnMebleFilter"}
              onClick={this.props.handleDeleteFilters}
            >
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

export default FurnitureFilterPanel;
