import React from "react";
import "./AddProduct.css";

const collectionList = "https://meble-api.herokuapp.com/collectionList";
const materialList = "https://meble-api.herokuapp.com/materialList";
const roomList = "https://meble-api.herokuapp.com/roomList";
const typeList = "https://meble-api.herokuapp.com/typeList";

class AddProduct extends React.Component {
  state = {
    collectionList: [],
    materialList: [],
    roomList: [],
    typeList: [],
    activeName: "",
    activeCollection: "",
    activeMaterial: "",
    activeRoom: "",
    activeType: "",
    activeFilename: "",
    activePrice: "",
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

  componentDidMount() {
    this.getCollectionList();
    this.getMaterialList();
    this.getRoomList();
    this.getTypeList();
  }

  handleFilteringChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleAddProdukt = (e) => {
    e.preventDefault();
    const {
      activeName,
      activeCollection,
      activeMaterial,
      activeRoom,
      activeType,
      activeFilename,
      activePrice,
    } = this.state;

    if (
      activeName === "" ||
      activeCollection === "" ||
      activeMaterial === "" ||
      activeRoom === "" ||
      activeType === "" ||
      activeFilename === "" ||
      activePrice === ""
    ) {
      alert("Proszę uzupelnic wszystkie pola");
      return;
    }
    fetch("https://meble-api.herokuapp.com/admin/add/product", {
      method: "POST",
      body: JSON.stringify({
        name: activeName,
        type: activeType,
        furnitureCollection: activeCollection,
        material: activeMaterial,
        room: activeRoom,
        price: activePrice,
        filename: activeFilename,
      }),
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          localStorage.clear();
          alert(data.error);
          window.location.reload(true);
        } else {
          alert("produkt zostal dodany");
        }
      });
  };
  render() {
    let collections = [{ _id: -1, name: "wybierz" }].concat(
      this.state.collectionList
    );
    collections = collections.map((collection) => (
      <option key={collection._id} value={collection.name}>
        {collection.name}
      </option>
    ));
    let materials = [{ _id: -1, name: "wybierz" }].concat(
      this.state.materialList
    );
    materials = materials.map((material) => (
      <option key={material._id} value={material.name}>
        {material.name}
      </option>
    ));
    let rooms = [{ _id: -1, name: "wybierz" }].concat(this.state.roomList);
    rooms = rooms.map((room) => (
      <option key={room._id} value={room.name}>
        {room.name}
      </option>
    ));
    let types = [{ _id: -1, name: "wybierz" }].concat(this.state.typeList);
    types = types.map((type) => (
      <option key={type._id} value={type.name}>
        {type.name}
      </option>
    ));

    return (
      <div className="AddProductPanel">
        <div className={"paneloption"}>
          <h2>Panel dodawania mebli</h2>
        </div>
        <div>
          <div className={"paneloption"}>
            <label htmlFor="activeName">Podaj nazwę: </label>
            <input
              className={"addProductinput"}
              type={"text"}
              value={this.state.activeName}
              name={"activeName"}
              onChange={this.handleFilteringChange}
            ></input>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeCollection">Wybierz kolekcje: </label>
            <select
              className={"selectAddProduct"}
              value={this.state.activeCollection}
              name={"activeCollection"}
              onChange={this.handleFilteringChange}
            >
              {collections}
            </select>
          </div>

          <div className={"paneloption"}>
            <label htmlFor="activeMaterial">Wybierz material: </label>
            <select
              className={"selectAddProduct"}
              value={this.state.activeMaterial}
              name={"activeMaterial"}
              onChange={this.handleFilteringChange}
            >
              {materials}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeRoom">Wybierz pomieszczenie: </label>
            <select
              className={"selectAddProduct"}
              value={this.state.activeRoom}
              name={"activeRoom"}
              onChange={this.handleFilteringChange}
            >
              {rooms}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeType">Wybierz rodzaj: </label>
            <select
              className={"selectAddProduct"}
              value={this.state.activeType}
              name="activeType"
              onChange={this.handleFilteringChange}
            >
              {types}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activePrice">Wprowadz cene: </label>
            <input
              className={"addProductinput"}
              type={"text"}
              value={this.state.activePrice}
              name={"activePrice"}
              onChange={this.handleFilteringChange}
            ></input>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeFilename">Wprowadz link do obrazu: </label>
            <input
              className={"addProductinput"}
              type={"text"}
              value={this.state.activeFilename}
              name={"activeFilename"}
              onChange={this.handleFilteringChange}
            ></input>
          </div>
          <div className={"paneloption"}>
            <button className={"btnAdd"} onClick={this.handleAddProdukt}>
              DODAJ PRODUKT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
