import React from "react";
import "./DeleteParameter.css";

// const listaKolekcji = "http://localhost:5000/listaKolekcji";
// const listaMaterialow = "http://localhost:5000/listaMaterialow";
// const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
// const listaRodzajow = "http://localhost:5000/listaRodzajow";

class DeleteParameter extends React.Component {
  state = {};
  render() {
    let itemsList = [{ _id: -1, nazwa: "wybierz" }].concat(
      this.props.itemsList
    );
    itemsList = itemsList.map((item) => (
      <option key={item._id} value={item.nazwa}>
        {item.nazwa}
      </option>
    ));
    return (
      <div>
        <label>USUN</label>
        <select className={"selectfilterPanel"}>{itemsList}</select>
        <button className={"adminpanelbtn"}>USUN</button>
        <button
          className={"adminpanelbtn"}
          onClick={this.props.showDeletePanel}
        >
          ANULUJ
        </button>
      </div>
    );
  }
}

export default DeleteParameter;
