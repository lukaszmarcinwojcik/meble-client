import React from "react";
import "./AddProdukt.css";

// const listaProduktow = "http://localhost:5000/listaProduktow";
const listaKolekcji = "http://localhost:5000/listaKolekcji";
const listaMaterialow = "http://localhost:5000/listaMaterialow";
const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
const listaRodzajow = "http://localhost:5000/listaRodzajow";

class AddProdukt extends React.Component {
  state = {
    kolekcje: [],
    materialy: [],
    pomieszczenia: [],
    rodzaje: [],
    nazwa: "",
    kolekcja: "",
    material: "",
    pomieszczenie: "",
    rodzaj: "",
    nazwapliku: "",
  };
  // getMebleList = () => {
  //   fetch(listaProduktow)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error(response.status);
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         meble: data.data,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

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

  handleFilteringChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleAddProdukt = (e) => {
    e.preventDefault();
    const { nazwa, kolekcja, material, pomieszczenie, rodzaj, nazwapliku } =
      this.state;
    fetch("http://localhost:5000/admin/add", {
      method: "POST",
      body: JSON.stringify({
        nazwa: nazwa,
        rodzaj: rodzaj,
        kolekcja: kolekcja,
        material: material,
        pomieszczenie: pomieszczenie,
        nazwapliku: nazwapliku,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("to mi zwrocilo: ", data);
        this.setState({
          // loginMessage: data.loginMessage,
          // islogged: data.islogged,
          // poziomDostepu: data.poziomDostepu,
        });
      });

    //////////////////////////////////////////////////////
  };
  render() {
    let kolekcje = [{ _id: -1, nazwa: "wybierz" }].concat(this.state.kolekcje);
    kolekcje = kolekcje.map((kolekcja) => (
      <option key={kolekcja._id} value={kolekcja.nazwa}>
        {kolekcja.nazwa}
      </option>
    ));
    let materialy = [{ _id: -1, nazwa: "wybierz" }].concat(
      this.state.materialy
    );
    materialy = materialy.map((material) => (
      <option key={material._id} value={material.nazwa}>
        {material.nazwa}
      </option>
    ));
    let pomieszczenia = [{ _id: -1, nazwa: "wybierz" }].concat(
      this.state.pomieszczenia
    );
    pomieszczenia = pomieszczenia.map((pomieszczenie) => (
      <option key={pomieszczenie._id} value={pomieszczenie.nazwa}>
        {pomieszczenie.nazwa}
      </option>
    ));
    let rodzaje = [{ _id: -1, nazwa: "wybierz" }].concat(this.state.rodzaje);
    rodzaje = rodzaje.map((rodzaj) => (
      <option key={rodzaj._id} value={rodzaj.nazwa}>
        {rodzaj.nazwa}
      </option>
    ));
    return (
      <div className="AddProduktPanel">
        <div className={"paneloption"}>
          <h2>Panel dodawania mebli</h2>
        </div>
        <div>
          <div className={"paneloption"}>
            <label htmlFor="nazwa">Podaj nazwę: </label>
            <input
              className={"addProduktinput"}
              type={"text"}
              value={this.props.nazwa}
              name={"nazwa"}
              onChange={this.handleFilteringChange}
            ></input>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="kolekcja">Wybierz kolekcje: </label>
            <select
              className={"selectAddProdukt"}
              value={this.props.kolekcja}
              name={"kolekcja"}
              onChange={this.handleFilteringChange}
            >
              {kolekcje}
            </select>
          </div>

          <div className={"paneloption"}>
            <label htmlFor="material">Wybierz material: </label>
            <select
              className={"selectAddProdukt"}
              value={this.props.material}
              name={"material"}
              onChange={this.handleFilteringChange}
            >
              {materialy}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="pomieszczenie">Wybierz pomieszczenie: </label>
            <select
              className={"selectAddProdukt"}
              value={this.props.pomieszczenie}
              name={"pomieszczenie"}
              onChange={this.handleFilteringChange}
            >
              {pomieszczenia}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="rodzaj">Wybierz rodzaj: </label>
            <select
              className={"selectAddProdukt"}
              value={this.props.rodzaj}
              name="rodzaj"
              onChange={this.handleFilteringChange}
            >
              {rodzaje}
            </select>
          </div>
          <div className={"paneloption"}>
            <label htmlFor="nazwapliku">Wprowadz link do obrazu: </label>
            <input
              className={"addProduktinput"}
              type={"text"}
              value={this.props.nazwa}
              name={"nazwapliku"}
              onChange={this.handleFilteringChange}
            ></input>
          </div>
          <div className={"paneloption"}>
            <button className={"btnAdd"} onClick={this.handleAddProdukt}>
              DODAJ PRODUKT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProdukt;
