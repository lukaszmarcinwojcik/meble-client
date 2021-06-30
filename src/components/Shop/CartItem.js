import React from "react";
import "./CartItem.css";

class CartItem extends React.Component {
  state = {};

  render() {
    return (
      <div className={"cartContainer"}>
        <div className={"furnitureCartlImg"}>
          <img
            className={"cartImg"}
            src={this.props.filename}
            alt={this.props.name}
          />
        </div>
        <div className={"furnitureCartInfo"}>
          <h2>{this.props.name}</h2>
          <p>{`materiał: ${this.props.material} `}</p>
          <p>
            {"cena: "} <span>{this.props.price} zł</span>
          </p>
        </div>
        <button
          className={"deleteFromCart"}
          value={this.props._id}
          onClick={this.props.deleteFromCart}
        >
          USUN
        </button>
      </div>
    );
  }
}

export default CartItem;
