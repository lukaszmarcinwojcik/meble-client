import React from "react";
import "./Shop.css";
import FurnitureCatalog from "./FurnitureCatalog";
import Cart from "./Cart";
// https://meble-api.herokuapp.com/
const API = "https://meble-api.herokuapp.com/";
const productList = "https://meble-api.herokuapp.com/productList";
const collectionList = "https://meble-api.herokuapp.com/collectionList";
const materialList = "https://meble-api.herokuapp.com/materialList";
const roomList = "https://meble-api.herokuapp.com/roomList";
const typeList = "https://meble-api.herokuapp.com/typeList";

class Shop extends React.Component {
  state = {
    isActiveCatalog: true,
    isActiveCart: false,
    cart: [],
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
    this.getProductList();
    this.getCollectionList();
    this.getMaterialList();
    this.getRoomList();
    this.getTypeList();
  }

  postMebleList = (reqOptions) => {
    const url = API + reqOptions;
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((productList) => {
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
  handleAddToCart = (e) => {
    const id = e.target.value;
    let cartItem;
    let cartListItem = JSON.parse(localStorage.getItem("cartListItem"));
    if (!cartListItem) {
      cartListItem = [];
    }
    if (cartListItem.includes(id)) {
      return;
    }
    cartItem = id;
    cartListItem = cartListItem.concat(cartItem);
    localStorage.setItem("cartListItem", JSON.stringify(cartListItem));
  };
  deleteFromCart = (e) => {
    const id = e.target.value;

    let cartListItem = JSON.parse(localStorage.getItem("cartListItem"));
    let index = cartListItem.findIndex((product) => product === id);

    cartListItem.splice(index, 1);
    localStorage.setItem("cartListItem", JSON.stringify(cartListItem));

    this.handleShowCart();
  };
  render() {
    let cartListItem = JSON.parse(localStorage.getItem("cartListItem"));
    return (
      <section id="shop" className={"shop"}>
        <div className={"separator"}></div>
        {this.state.isActiveCatalog ? (
          <section className={"catalog"}>
            <FurnitureCatalog
              handleShowCart={this.handleShowCart}
              handleAddToCart={this.handleAddToCart}
              productList={this.state.productList}
              accessLevel={this.props.accessLevel}
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
            />
          </section>
        ) : null}
        {this.state.isActiveCart ? (
          <Cart
            handleShowCatalog={this.handleShowCatalog}
            cart={cartListItem}
            productList={this.state.productList}
            deleteFromCart={this.deleteFromCart}
          />
        ) : null}
      </section>
    );
  }
}

export default Shop;
