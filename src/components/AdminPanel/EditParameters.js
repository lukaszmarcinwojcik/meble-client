import React from "react";
import "./EditParameters.css";
import AddEditDeleteParameter from "./FurnitureParameters/AddEditDeleteParameter";

const collectionList = "http://localhost:5000/collectionList";
const materialList = "http://localhost:5000/materialList";
const roomList = "http://localhost:5000/roomList";
const typeList = "http://localhost:5000/typeList";

class EditParameters extends React.Component {
  state = {
    isActiveKolekcjaAdd: false,
    isActiveKolekcjaDelete: false,
    isActiveKolekcjaEdit: false,
    collectionList: [],
    materialList: [],
    roomList: [],
    typeList: [],
  };

  getCollectionList = () => {
    fetch(collectionList)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((collectionList) => {
        this.setState({
          collectionList: collectionList,
        });
      })
      .catch((error) => console.log(error));
  };

  getMaterialList = () => {
    fetch(materialList)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((materialList) => {
        this.setState({
          materialList: materialList,
        });
      })
      .catch((error) => console.log(error));
  };

  getRoomList = () => {
    fetch(roomList)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((roomList) => {
        this.setState({
          roomList: roomList,
        });
      })
      .catch((error) => console.log(error));
  };

  getTypeList = () => {
    fetch(typeList)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((typeList) => {
        this.setState({
          typeList: typeList,
        });
      })
      .catch((error) => console.log(error));
  };

  handleParameterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.getCollectionList();
    this.getMaterialList();
    this.getRoomList();
    this.getTypeList();
  }

  render() {
    return (
      <div className="EditParamitersPanel">
        <div className={"paneloption"}>
          <h2>Panel edycji parametrow mebli</h2>
        </div>
        <AddEditDeleteParameter
          title={"KOLEKCJE"}
          parameterName={"collection"}
          itemsList={this.state.collectionList}
          updateParameters={this.getCollectionList}
        />
        <AddEditDeleteParameter
          title={"MATERIALY"}
          parameterName={"material"}
          itemsList={this.state.materialList}
          updateParameters={this.getMaterialList}
        />
        <AddEditDeleteParameter
          title={"RODZAJE"}
          parameterName={"type"}
          itemsList={this.state.typeList}
          updateParameters={this.getTypeList}
        />
        <AddEditDeleteParameter
          title={"POMIESZCZENIA"}
          parameterName={"room"}
          itemsList={this.state.roomList}
          updateParameters={this.getRoomList}
        />
      </div>
    );
  }
}

export default EditParameters;
