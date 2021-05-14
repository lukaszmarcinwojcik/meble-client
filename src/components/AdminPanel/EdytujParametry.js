import React from "react";
import "./EdytujParametry.css";

const listaKolekcji = "http://localhost:5000/listaKolekcji";
const listaMaterialow = "http://localhost:5000/listaMaterialow";
const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
const listaRodzajow = "http://localhost:5000/listaRodzajow";

class EdytujParametry extends React.Component {
  state = {
    kolekcje: [],
    materialy: [],
    pomieszczenia: [],
    rodzaje: [],
    kolekcja: "",
    material: "",
    pomieszczenie: "",
    rodzaj: "",
  };

  getKolekcjeList = () => {
    fetch(listaKolekcji)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("pobrano: ", data.title, data.data);
        this.setState({
          kolekcje: data.data,
        });
      })
      .catch((error) => console.log(error));
  };

  getMaterialyList = () => {
    fetch(listaMaterialow)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("pobrano: ", data.title, data.data);
        this.setState({
          materialy: data.data,
        });
      })
      .catch((error) => console.log(error));
  };

  getPomieszczeniaList = () => {
    fetch(listaPomieszczen)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("pobrano: ", data.title, data.data);
        this.setState({
          pomieszczenia: data.data,
        });
      })
      .catch((error) => console.log(error));
  };

  getRodzajeList = () => {
    fetch(listaRodzajow)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("pobrano: ", data.title, data.data);
        this.setState({
          rodzaje: data.data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    // this.getMebleList();
    this.getKolekcjeList();
    this.getMaterialyList();
    this.getPomieszczeniaList();
    this.getRodzajeList();
  };

  render() {
    return (
      <div className="EdytujParametryPanel">
        <div className={"paneloption"}>
          <h2>Panel edycji parametrow mebli</h2>
        </div>
        <div className={"paneloption"}>
          <label>KOLEKCJE: </label>
          <button className={"adminpanelbtn"}>DODAJ</button>
          <button className={"adminpanelbtn"}>USUN</button>
          <button className={"adminpanelbtn"}>EDYTUJ</button>
        </div>
        <div className={"paneloption"}>
          <label>MATERIALY: </label>
          <button className={"adminpanelbtn"}>DODAJ</button>
          <button className={"adminpanelbtn"}>USUN</button>
          <button className={"adminpanelbtn"}>EDYTUJ</button>
        </div>
        <div className={"paneloption"}>
          <label>RODZAJE: </label>
          <button className={"adminpanelbtn"}>DODAJ</button>
          <button className={"adminpanelbtn"}>USUN</button>
          <button className={"adminpanelbtn"}>EDYTUJ</button>
        </div>
        <div className={"paneloption"}>
          <label>POMIESZCZENIA: </label>
          <button className={"adminpanelbtn"}>DODAJ</button>
          <button className={"adminpanelbtn"}>USUN</button>
          <button className={"adminpanelbtn"}>EDYTUJ</button>
        </div>
      </div>
    );
  }
}

export default EdytujParametry;
