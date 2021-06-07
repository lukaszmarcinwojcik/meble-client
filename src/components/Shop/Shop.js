import React from "react";
import "./Shop.css";
import FurnitureFilterPanel from "./FurnitureFilterPanel";
import FurnitureCatalog from "./FurnitureCatalog";
import Cart from "./Cart";

const API = "http://localhost:5000/";
const productList = "http://localhost:5000/productList";
const collectionList = "http://localhost:5000/collectionList";
const materialList = "http://localhost:5000/materialList";
const roomList = "http://localhost:5000/roomList";
const typeList = "http://localhost:5000/typeList";

class Shop extends React.Component {
  state = {
    isActiveCatalog: true,
    isActiveCart: false,
    productList: [],
    collectionList: [],
    materialList: [],
    roomList: [],
    typeList: [],
    activeCollection: "",
    activeMaterial: "",
    activeRoom: "",
    activeType: "",
  };

  getProductList = () => {
    fetch(productList)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((productList) => {
        console.log("pobrane meble do meble list:", productList);
        this.setState({
          productList: productList,
        });
      })
      .catch((error) => console.log(error));
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

  componentDidMount() {
    this.getProductList();
    this.getCollectionList();
    this.getMaterialList();
    this.getRoomList();
    this.getTypeList();
  }

  postMebleList = (reqOptions) => {
    console.log(API + reqOptions);
    const url = API + reqOptions;
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((productList) => {
        console.log(productList);
        this.setState({
          productList: productList,
        });
      });
  };

  handleDeleteFilters = () => {
    this.getProductList();

    this.setState({
      activeCollection: "",
      activeMaterial: "",
      activeRoom: "",
      activeType: "",
    });
  };
  handleFilteringChange = (e) => {
    console.log(e.target.value, e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFilteringSubmit = (e) => {
    e.preventDefault();
    const { activeCollection, activeMaterial, activeRoom, activeType } =
      this.state;
    var reqOptions = `filter?collection=${activeCollection}&material=${activeMaterial}&room=${activeRoom}&type=${activeType}`;
    console.log("req option w handle filtr panel", reqOptions);
    this.postMebleList(reqOptions);
  };
  handleShowCatalog = () => {
    this.setState({
      isActiveCatalog: true,
      isActiveCart: false,
    });
  };
  handleShowCart = () => {
    this.setState({
      isActiveCatalog: false,
      isActiveCart: true,
    });
  };
  render() {
    return (
      <section id="shop" className={"shop"}>
        {this.state.isActiveCatalog ? (
          <section className={"catalog"}>
            <FurnitureFilterPanel
              activeCollection={this.state.activeCollection}
              activeMaterial={this.state.activeMaterial}
              activeRoom={this.state.activeRoom}
              activeType={this.state.activeType}
              collectionList={this.state.collectionList}
              materialList={this.state.materialList}
              roomList={this.state.roomList}
              typeList={this.state.typeList}
              handleFilteringSubmit={this.handleFilteringSubmit}
              handleFilteringChange={this.handleFilteringChange}
              handleDeleteFilters={this.handleDeleteFilters}
              accessLevel={this.props.accessLevel}
            />
            <FurnitureCatalog
              handleShowCart={this.handleShowCart}
              productList={this.state.productList}
              accessLevel={this.props.accessLevel}
            />
          </section>
        ) : null}
        {this.state.isActiveCart ? (
          <Cart handleShowCatalog={this.handleShowCatalog} />
        ) : null}
      </section>
    );
  }
}

export default Shop;
