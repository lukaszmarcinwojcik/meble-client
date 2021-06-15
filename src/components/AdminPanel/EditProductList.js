import React from "react";
import EditDeleteProduct from "./EditDeleteProduct";
import "./EditProductList.css";

const productList = "http://localhost:5000/productList";

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
        console.log("pobrane meble do meble list:", productList);
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
      <div className="EdytujParametryPanel">
        <div className={"paneloption"}>
          <h2>Panel edycji mebli</h2>
        </div>
        {furnitureList}
      </div>
    );
  }
}

export default EditProductList;
