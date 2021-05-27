import React from "react";
import "./AddParametr.css";

// const listaKolekcji = "http://localhost:5000/listaKolekcji";
// const listaMaterialow = "http://localhost:5000/listaMaterialow";
// const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
// const listaRodzajow = "http://localhost:5000/listaRodzajow";

class AddParametr extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <label>DODAJ</label>
        <input className={"adminpanelbtn"} type={"text"}></input>
        <button className={"adminpanelbtn"}>DODAJ</button>
        <button className={"adminpanelbtn"} onClick={this.props.showAddPanel}>
          ANULUJ
        </button>
      </div>
    );
  }
}

export default AddParametr;
