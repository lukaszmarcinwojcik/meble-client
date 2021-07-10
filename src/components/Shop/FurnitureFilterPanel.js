import React from "react";
import "./FurnitureFilterPanel.css";

class FurnitureFilterPanel extends React.Component {
  state = {};

  render() {
    let collectionList = [{ _id: -1, name: "" }].concat(
      this.props.collectionList
    );
    collectionList = collectionList.map((collection) => (
      <option key={collection._id} value={collection.name}>
        {collection.name}
      </option>
    ));
    let materialList = [{ _id: -1, name: "" }].concat(this.props.materialList);
    materialList = materialList.map((material) => (
      <option key={material._id} value={material.name}>
        {material.name}
      </option>
    ));
    let roomList = [{ _id: -1, name: "" }].concat(this.props.roomList);
    roomList = roomList.map((room) => (
      <option key={room._id} value={room.name}>
        {room.name}
      </option>
    ));
    let typeList = [{ _id: -1, name: "" }].concat(this.props.typeList);
    typeList = typeList.map((type) => (
      <option key={type._id} value={type.name}>
        {type.name}
      </option>
    ));
    return (
      <div className="mebleFilteringPanel">
        <div className={"filterPanelContainer"}>
          <div className={"filterPanelOption"}>
            <label htmlFor="activeCollection">kolekcja: </label>
            <select
              className={"selectfilterPanel"}
              value={this.props.activeCollection}
              name={"activeCollection"}
              onChange={this.props.handleFilteringChange}
            >
              {collectionList}
            </select>
          </div>

          <div className={"filterPanelOption"}>
            <label htmlFor="activeMaterial">material: </label>
            <select
              className={"selectfilterPanel"}
              value={this.props.activeMaterial}
              name={"activeMaterial"}
              onChange={this.props.handleFilteringChange}
            >
              {materialList}
            </select>
          </div>
          <div className={"filterPanelOption"}>
            <label htmlFor="activeRoom">pomieszczenie: </label>
            <select
              className={"selectfilterPanel"}
              value={this.props.activeRoom}
              name={"activeRoom"}
              onChange={this.props.handleFilteringChange}
            >
              {roomList}
            </select>
          </div>
          <div className={"filterPanelOption"}>
            <label htmlFor="activeType">rodzaj: </label>
            <select
              className={"selectfilterPanel"}
              value={this.props.activeType}
              name="activeType"
              onChange={this.props.handleFilteringChange}
            >
              {typeList}
            </select>
          </div>
          <div className={"filterPanelOption"}>
            <button
              className={"butnMebleFilter"}
              onClick={this.props.handleDeleteFilters}
            >
              Pokaz wszystkie
            </button>
            <button
              className={"btnFind"}
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
