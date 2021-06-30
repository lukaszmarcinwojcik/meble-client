import React from "react";
import "./EditDeleteProduct.css";
import EditProduct from "./EditProduct";

class EditDeleteProduct extends React.Component {
  state = { isActiveEditPanel: false, isActiveDeletePanel: false };

  handleDeleteProduct = (e) => {
    e.preventDefault();

    let deleteProduct =
      "https://meble-api.herokuapp.com/admin/delete/product/" + this.props._id;

    fetch(deleteProduct, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          localStorage.clear();
          alert(data.error);
          window.location.reload(true);
        } else {
          this.showDeletePanel();
          this.props.updateProductList();
          alert("usunieto produkt");
        }
      });
  };
  showDeletePanel = () => {
    this.setState({
      isActiveDeletePanel: !this.state.isActiveDeletePanel,
      isActiveEditPanel: false,
    });
  };
  showEditPanel = () => {
    this.setState({
      isActiveEditPanel: !this.state.isActiveEditPanel,
      isActiveDeletePanel: false,
    });
  };

  render() {
    const deleteProduct = (
      <div>
        <label>Czy na pewno chcesz usunac? </label>
        <button onClick={this.handleDeleteProduct} className={"adminpanelbtn"}>
          TAK
        </button>
        <button onClick={this.showDeletePanel} className={"adminpanelbtn"}>
          NIE
        </button>
      </div>
    );
    return (
      <div className={"paneloption"}>
        <label>{this.props.name} </label>
        <button onClick={this.showDeletePanel} className={"adminpanelbtn"}>
          USUN
        </button>
        <button onClick={this.showEditPanel} className={"adminpanelbtn"}>
          EDYTUJ
        </button>
        {this.state.isActiveDeletePanel ? deleteProduct : null}
        {this.state.isActiveEditPanel ? (
          <EditProduct
            _id={this.props._id}
            name={this.props.name}
            furnitureCollection={this.props.furnitureCollection}
            material={this.props.material}
            room={this.props.room}
            date={this.props.date}
            type={this.props.type}
            filename={this.props.filename}
            price={this.props.price}
            updateProductList={this.props.updateProductList}
            showEditPanel={this.showEditPanel}
          />
        ) : null}
      </div>
    );
  }
}

export default EditDeleteProduct;
