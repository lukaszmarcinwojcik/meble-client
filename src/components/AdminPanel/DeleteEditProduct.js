import React from "react";
import "./DeleteEditProduct.css";

class DeleteEditProduct extends React.Component {
  state = {};

  render() {
    return (
      <div className={"adminpanel"}>
        <button className={"adminpanelbtn"}>USUN</button>
        <button className={"adminpanelbtn"}>EDYTUJ</button>
      </div>
    );
  }
}

export default DeleteEditProduct;