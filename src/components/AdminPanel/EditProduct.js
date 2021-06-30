import React from "react";
// import "./AddProduct.css";

const collectionList = "https://meble-api.herokuapp.com/collectionList";
const materialList = "https://meble-api.herokuapp.com/materialList";
const roomList = "https://meble-api.herokuapp.com/roomList";
const typeList = "https://meble-api.herokuapp.com/typeList";

class EditProduct extends React.Component {
  state = {
    collectionList: [],
    materialList: [],
    roomList: [],
    typeList: [],
    activeId: "",
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
  setActiveParameters = () => {
    this.setState({
      activeId: this.props._id,
      activeName: this.props.name,
      activeCollection: this.props.furnitureCollection,
      activeMaterial: this.props.material,
      activeRoom: this.props.room,
      activeType: this.props.type,
      activeDate: this.props.date,
      activeFilename: this.props.filename,
      activePrice: this.props.price,
    });
  };
  componentDidMount() {
    // this.getProductList();
    this.getCollectionList();
    this.getMaterialList();
    this.getRoomList();
    this.getTypeList();
    this.setActiveParameters();
  }

  handleFilteringChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleEditProdukt = (e) => {
    e.preventDefault();
    const {
      activeId,
      activeName,
      activeCollection,
      activeMaterial,
      activeRoom,
      activeType,
      activePrice,
      activeFilename,
    } = this.state;
    fetch("https://meble-api.herokuapp.com/admin/edit/product", {
      method: "PUT",
      body: JSON.stringify({
        id: activeId,
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
        this.props.updateProductList();
        this.props.showEditPanel();
        if (data.error) {
          localStorage.clear();
          alert(data.error);
        } else {
          alert("produkt zostal zmieniony");
        }
      });
  };
  render() {
    let collections = this.state.collectionList.map((collection) => (
      <option key={collection._id} value={collection.name}>
        {collection.name}
      </option>
    ));
    let materials = this.state.materialList.map((material) => (
      <option key={material._id} value={material.name}>
        {material.name}
      </option>
    ));
    let rooms = this.state.roomList.map((room) => (
      <option key={room._id} value={room.name}>
        {room.name}
      </option>
    ));
    let types = this.state.typeList.map((type) => (
      <option key={type._id} value={type.name}>
        {type.name}
      </option>
    ));
    return (
      <div className="EditParamitersPanel">
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
            <button className={"btnAdd"} onClick={this.handleEditProdukt}>
              ZAPISZ ZMIANY
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProduct;
