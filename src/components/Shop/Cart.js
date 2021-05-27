import React from "react";
import "./Cart.css";

class Cart extends React.Component {
  state = {};

  render() {
    return (
      <section className={"cart"}>
        <h2>Twój koszyk</h2>
        <h2 onClick={this.props.handleShowCatalog}>Powrot do sklepu</h2>
      </section>
    );
  }
}

export default Cart;
