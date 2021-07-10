import React from "react";
import "./FurnitureCatalog.css";
import "./Furniture.css";

class Furniture extends React.Component {
  state = { isActiveMoreInfo: false };

  render() {
    return (
      <>
        <div className={"furniture"} key={this.props._id}>
          <h2 className={"furnituretitle"}>{`${this.props.name}`}</h2>
          <div className={"furnitureDescription"}>
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
            <p>
              {"cena: "}
              <span>{this.props.price} zł</span>
            </p>
          </div>
          <div className={"furnitureImg"}>
            <img
              className={"Img"}
              src={this.props.filename}
              alt={this.props.name}
            />
          </div>
          <button
            className={"addToCart"}
            onClick={this.props.handleAddToCart}
            value={this.props._id}
          >
            DODAJ DO KOSZYKA
          </button>
        </div>
      </>
    );
  }
}

export default Furniture;
