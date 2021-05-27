import React from "react";
import "./EdytujParametry.css";
import AddEditDeleteParametr from "./ParemetryMebli/AddEditDeleteParametr";

const listaKolekcji = "http://localhost:5000/listaKolekcji";
const listaMaterialow = "http://localhost:5000/listaMaterialow";
const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
const listaRodzajow = "http://localhost:5000/listaRodzajow";

class EdytujParametry extends React.Component {
  state = {
    isActiveKolekcjaAdd: false,
    isActiveKolekcjaDelete: false,
    isActiveKolekcjaEdit: false,
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
        <AddEditDeleteParametr
          title={"KOLEKCJE"}
          itemsList={this.state.kolekcje}
        />
        <AddEditDeleteParametr
          title={"MATERIALY"}
          itemsList={this.state.materialy}
        />
        <AddEditDeleteParametr
          title={"RODZAJE"}
          itemsList={this.state.rodzaje}
        />
        <AddEditDeleteParametr
          title={"POMIESZCZENIA"}
          itemsList={this.state.pomieszczenia}
        />
      </div>
    );
  }
}

export default EdytujParametry;
