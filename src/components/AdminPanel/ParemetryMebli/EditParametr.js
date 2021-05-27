import React from "react";
import "./EditParametr.css";

// const listaKolekcji = "http://localhost:5000/listaKolekcji";
// const listaMaterialow = "http://localhost:5000/listaMaterialow";
// const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
// const listaRodzajow = "http://localhost:5000/listaRodzajow";

class EditParametr extends React.Component {
  state = {};
  render() {
    let itemsList = [{ _id: -1, nazwa: "wubierz" }].concat(
      this.props.itemsList
    );
    itemsList = itemsList.map((item) => (
      <option key={item._id} value={item.nazwa}>
        {item.nazwa}
      </option>
    ));
    return (
      <div>
        <label>EDYTUJ</label>
        <select className={"selectfilterPanel"}>{itemsList}</select>
        <input className={"adminpanelbtn"} type={"text"}></input>
        <button className={"adminpanelbtn"}>EDYTUJ</button>
        <button className={"adminpanelbtn"} onClick={this.props.showEditPanel}>
          ANULUJ
        </button>
      </div>
    );
  }
}

export default EditParametr;
