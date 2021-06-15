import React from "react";
import "./FurnitureCatalog.css";
import AddProduct from "../AdminPanel/AddProduct";
import EditParameters from "../AdminPanel/EditParameters";
import EditProductList from "../AdminPanel/EditProductList";

import Furniture from "./Furniture";

class FurnitureCatalog extends React.Component {
  state = {
    editParametersIsActive: false,
    addProductPanelIsActive: false,
    editProductListIsActive: false,
  };
  showAddProductPanel = (e) => {
    console.log("status paneluADD: ", !this.state.addProductPanelIsActive);
    this.setState({
      addProductPanelIsActive: !this.state.addProductPanelIsActive,
      editParametersIsActive: false,
      editProductListIsActive: false,
    });
  };

  showEditParameters = (e) => {
    console.log(
      "status paneluEDIT param: ",
      !this.state.editParametersIsActive
    );
    this.setState({
      editParametersIsActive: !this.state.editParametersIsActive,
      addProductPanelIsActive: false,
      editProductListIsActive: false,
    });
  };
  showEditProductList = (e) => {
    console.log(
      "status paneluEDITproduct: ",
      !this.state.editProductListIsActive
    );
    this.setState({
      editProductListIsActive: !this.state.editProductListIsActive,
      addProductPanelIsActive: false,
      editParametersIsActive: false,
    });
  };

  render() {
    const dodajNowyMebel = (
      <button onClick={this.showAddProductPanel} className={"addNewMebel"}>
        DODAJ NOWY PRODUKT
      </button>
    );

    const edytujParametry = (
      <button onClick={this.showEditParameters} className={"addNewMebel"}>
        EDYTUJ PARAMETRY MEBLI
      </button>
    );
    const edytujProdukty = (
      <button onClick={this.showEditProductList} className={"addNewMebel"}>
        EDYTUJ PRODUKTY
      </button>
    );
    const meble = this.props.productList.map((product) => (
      <Furniture
        key={product._id}
        _id={product._id}
        name={product.name}
        furnitureCollection={product.furnitureCollection}
        material={product.material}
        room={product.room}
        date={product.date}
        filename={product.filename}
        price={product.price}
        accessLevel={this.props.accessLevel}
        handleAddToCart={this.props.handleAddToCart}
        product={product}
      />
    ));

    return (
      <div className="mebleList">
        <div className={"mebleListTitle"}>
          <h2>KATALOG MEBLI</h2>
          <h2 onClick={this.props.handleShowCart}>Przejdz do koszyka</h2>
          {this.props.accessLevel === 3 ? dodajNowyMebel : null}
          {this.props.accessLevel === 3 ? edytujProdukty : null}
          {this.props.accessLevel === 3 ? edytujParametry : null}
          {this.state.addProductPanelIsActive ? (
            <AddProduct showAddProductPanel={this.state.showAddProductPanel} />
          ) : null}
          {this.state.editParametersIsActive ? (
            <EditParameters
              showEditParameters={this.state.showEditParameters}
            />
          ) : null}
          {this.state.editProductListIsActive ? (
            <EditProductList
              showEditProductList={this.state.showEditProductList}
            />
          ) : null}
        </div>
        {meble}
      </div>
    );
  }
}

export default FurnitureCatalog;
