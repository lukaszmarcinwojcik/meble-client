import React from "react";
import "./FurnitureCatalog.css";
import AddProduct from "../AdminPanel/AddProduct";
import EditParameters from "../AdminPanel/EditParameters";
import EditProductList from "../AdminPanel/EditProductList";
import FurnitureFilterPanel from "./FurnitureFilterPanel";

import Furniture from "./Furniture";

class FurnitureCatalog extends React.Component {
  state = {
    editParametersIsActive: false,
    addProductPanelIsActive: false,
    editProductListIsActive: false,
    catalogIsActive: true,
  };
  showAddProductPanel = (e) => {
    this.setState({
      addProductPanelIsActive: !this.state.addProductPanelIsActive,
      editParametersIsActive: false,
      editProductListIsActive: false,
      catalogIsActive: false,
    });
  };

  showEditParameters = (e) => {
    this.setState({
      editParametersIsActive: !this.state.editParametersIsActive,
      addProductPanelIsActive: false,
      editProductListIsActive: false,
      catalogIsActive: false,
    });
  };
  componentDidMount() {
    this.showCatalog();
  }
  showEditProductList = (e) => {
    this.setState({
      editProductListIsActive: !this.state.editProductListIsActive,
      addProductPanelIsActive: false,
      editParametersIsActive: false,
      catalogIsActive: false,
    });
  };
  showCatalog = (e) => {
    this.setState({
      catalogIsActive: true,
      editProductListIsActive: false,
      addProductPanelIsActive: false,
      editParametersIsActive: false,
    });
  };

  render() {
    const catalog = (
      <button onClick={this.showCatalog} className={"addNewMebel"}>
        KATALOG
      </button>
    );
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
        <div>
          <h2 className={"mebleListTitle"}>
            KATALOG MEBLI
            <div
              className={"goToCart"}
              onClick={this.props.handleShowCart}
            ></div>
          </h2>

          {this.props.accessLevel === 3 ? catalog : null}
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
        {this.state.catalogIsActive ? (
          <div>
            <FurnitureFilterPanel
              activeCollection={this.props.activeCollection}
              activeMaterial={this.props.activeMaterial}
              activeRoom={this.props.activeRoom}
              activeType={this.props.activeType}
              collectionList={this.props.collectionList}
              materialList={this.props.materialList}
              roomList={this.props.roomList}
              typeList={this.props.typeList}
              handleFilteringSubmit={this.props.handleFilteringSubmit}
              handleFilteringChange={this.props.handleFilteringChange}
              handleDeleteFilters={this.props.handleDeleteFilters}
              accessLevel={this.props.accessLevel}
            />
            {meble}
          </div>
        ) : null}
      </div>
    );
  }
}

export default FurnitureCatalog;
