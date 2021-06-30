import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

class Cart extends React.Component {
  state = {
    paymentPanelIsActive: false,
    cartProductListIsActive: true,
    amount: 0,
  };

  showCartProductLtis = () => {
    this.setState({
      paymentPanelIsActive: false,
      cartProductListIsActive: true,
    });
  };
  showPaymentPanel = () => {
    this.setState({
      paymentPanelIsActive: true,
      cartProductListIsActive: false,
    });
  };
  render() {
    let itemsInCart;
    if (!this.props.cart) {
      itemsInCart = <h2>Twój koszyk jest pusty</h2>;
    } else {
      itemsInCart = this.props.productList.filter((product) =>
        this.props.cart.includes(product._id)
      );
      itemsInCart = itemsInCart.map((product) => (
        <CartItem
          key={product._id}
          deleteFromCart={this.props.deleteFromCart}
          name={product.name}
          material={product.material}
          price={product.price}
          _id={product._id}
          filename={product.filename}
        />
      ));
    }

    return (
      <section className={"cart"}>
        {this.state.cartProductListIsActive ? (
          <>
            <div className={"cartProductList"}>
              <h2 className={"cartTitle"}>Twój koszyk</h2>

              <div
                className={"goToShop"}
                onClick={this.props.handleShowCatalog}
              ></div>

              <div>
                {itemsInCart}
                <button className={"cartBtn"} onClick={this.showPaymentPanel}>
                  PRZEJDZ DO PŁATNOŚCI
                </button>
              </div>
            </div>
          </>
        ) : null}
        {this.state.paymentPanelIsActive ? (
          <>
            <div className={"paymentPanel"}>
              <h2>Wybierz formę płatnośći</h2>
              <div className={"paymentMethod"}></div>
              <button className={"cartBtn"} onClick={this.showCartProductLtis}>
                WRÓĆ DO KOSZYKA
              </button>
            </div>
          </>
        ) : null}
      </section>
    );
  }
}

export default Cart;
