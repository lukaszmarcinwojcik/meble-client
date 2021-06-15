import React from "react";
// import DeleteEditProduct from "../AdminPanel/DeleteEditProduct";
import "./FurnitureCatalog.css";
import "./Furniture.css";

class Furniture extends React.Component {
  state = { isActiveMoreInfo: false };
  // handleShowMoreInfo = () => {
  //   console.log("", this.props.name);
  //   this.setState({
  //     isActiveMoreInfo: !this.state.isActiveMoreInfo,
  //   });
  // };
  render() {
    return (
      <>
        <div
          className={"mebel"}
          key={this.props._id}
          // onClick={this.handleShowMoreInfo}
        >
          <h2 className={"mebeltitle"}>{`${this.props.name}`}</h2>
          <div className={"mebleDescription"}>
            <p>
              {"kolekcja: "}
              <span>{this.props.furnitureCollection}</span>
            </p>
            <p>
              {"materiał: "}
              <span>{this.props.material}</span>
            </p>
            <p>
              {"pomieszczenie: "}
              <span>{this.props.room}</span>
            </p>
            <p>{`${this.props.date}`}</p>
          </div>
          <div className={"mebelImg"}>
            {/* <img
            className={"Img"}
            src={mebel.nazwapliku}
            alt={mebel.nazwa}

          /> */}
          </div>
          <button
            className={"addToCart"}
            onClick={this.props.handleAddToCart}
            name={this.props.name}
            _id={this.props._id}
            product={this.props.product}
            furnitureCollection={this.props.furnitureCollection}
            material={this.props.material}
            room={this.props.room}
          >
            DODAJ DO KOSZYKA
          </button>
          {/* {this.props.accessLevel === 3 ? <DeleteEditProduct /> : null} */}
        </div>
      </>
    );
  }
}

export default Furniture;
