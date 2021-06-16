import React from "react";
// import "./AddProduct.css";

const collectionList = "http://localhost:5000/collectionList";
const materialList = "http://localhost:5000/materialList";
const roomList = "http://localhost:5000/roomList";
const typeList = "http://localhost:5000/typeList";

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
        console.log("pobrano: ", collectionList);
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
        console.log("pobrano: ", materialList);
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
        console.log("pobrano: ", roomList);
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
        console.log("pobrano: ", typeList);
        this.setState({
          typeList: typeList,
        });
      })
      .catch((error) => console.log(error));
  };
  setActiveParameters = () => {
    console.log("ustawiam typ: ", this.props.type);
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
    console.log("jakie okno", e.target.name);
    console.log("jaka wartosc", e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleAddProdukt = (e) => {
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
    fetch("http://localhost:5000/admin/edit/product", {
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
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("to mi zwrocilo: ", data);
        this.props.updateProductList();
        this.props.showEditPanel();
        if (data.message) {
          alert(data.message);
        } else {
          alert("Zapisano zmiany");
        }
        this.setState({
          // loginMessage: data.loginMessage,
          // islogged: data.islogged,
          // poziomDostepu: data.poziomDostepu,
        });
      });

    //////////////////////////////////////////////////////
  };
  render() {
    let kolekcje = this.state.collectionList.map((collection) => (
      <option key={collection._id} value={collection.name}>
        {collection.name}
      </option>
    ));
    let materialy = this.state.materialList.map((material) => (
      <option key={material._id} value={material.name}>
        {material.name}
      </option>
    ));
    let pomieszczenia = this.state.roomList.map((room) => (
      <option key={room._id} value={room.name}>
        {room.name}
      </option>
    ));
    let rodzaje = this.state.typeList.map((type) => (
      <option key={type._id} value={type.name}>
        {type.name}
      </option>
    ));
    return (
      <div className="EdytujParametryPanel">
        <div>
          <div className={"paneloption"}>
            <label htmlFor="activeName">Podaj nazwę: </label>
            <input
              className={"addProduktinput"}
              type={"text"}
              value={this.state.activeName}
              name={"activeName"}
              onChange={this.handleFilteringChange}
            ></input>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeCollection">Wybierz kolekcje: </label>
            <select
              className={"selectAddProdukt"}
              value={this.state.activeCollection}
              name={"activeCollection"}
              onChange={this.handleFilteringChange}
            >
              {kolekcje}
            </select>
          </div>

          <div className={"paneloption"}>
            <label htmlFor="activeMaterial">Wybierz material: </label>
            <select
              className={"selectAddProdukt"}
              value={this.state.activeMaterial}
              name={"activeMaterial"}
              onChange={this.handleFilteringChange}
            >
              {materialy}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeRoom">Wybierz pomieszczenie: </label>
            <select
              className={"selectAddProdukt"}
              value={this.state.activeRoom}
              name={"activeRoom"}
              onChange={this.handleFilteringChange}
            >
              {pomieszczenia}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeType">Wybierz rodzaj: </label>
            <select
              className={"selectAddProdukt"}
              value={this.state.activeType}
              name="activeType"
              onChange={this.handleFilteringChange}
            >
              {rodzaje}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activePrice">Wprowadz cene: </label>
            <input
              className={"addProduktinput"}
              type={"text"}
              value={this.state.activePrice}
              name={"activePrice"}
              onChange={this.handleFilteringChange}
            ></input>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="activeFilename">Wprowadz link do obrazu: </label>
            <input
              className={"addProduktinput"}
              type={"text"}
              value={this.state.activeFilename}
              name={"activeFilename"}
              onChange={this.handleFilteringChange}
            ></input>
          </div>
          <div className={"paneloption"}>
            <button className={"btnAdd"} onClick={this.handleAddProdukt}>
              ZAPISZ ZMIANY
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProduct;
