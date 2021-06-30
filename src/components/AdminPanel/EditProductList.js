import React from "react";
import EditDeleteProduct from "./EditDeleteProduct";
import "./EditProductList.css";

const productList = "https://meble-api.herokuapp.com/productList";

class EditProductList extends React.Component {
  state = { productList: [] };

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
  componentDidMount() {
    this.getProductList();
  }

  render() {
    const furnitureList = this.state.productList.map((product) => (
      <EditDeleteProduct
        key={product._id}
        _id={product._id}
        name={product.name}
        furnitureCollection={product.furnitureCollection}
        material={product.material}
        room={product.room}
        date={product.date}
        filename={product.filename}
        price={product.price}
        type={product.type}
        accessLevel={this.props.accessLevel}
        updateProductList={this.getProductList}
      />
    ));
    return (
      <div className="EditParamitersPanel">
        <div className={"paneloption"}>
          <h2>Panel edycji mebli</h2>
        </div>
        {furnitureList}
      </div>
    );
  }
}

export default EditProductList;
