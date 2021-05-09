import React, { Component } from "react";
import "./App.css";
import MebleList from "./MebleList";
import MebleFilteringPanel from "./MebleFilteringPanel";
import NavBar from "./NavBar";
import Sliders from "./Sliders";
import Footer from "./Footer";

const API = "http://localhost:5000/";
const listaProduktow = "http://localhost:5000/listaProduktow";
const listaKolekcji = "http://localhost:5000/listaKolekcji";
const listaMaterialow = "http://localhost:5000/listaMaterialow";
const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
const listaRodzajow = "http://localhost:5000/listaRodzajow";

class App extends Component {
  state = {
    poziomDostepu: 3,
    meble: [],
    kolekcje: [],
    materialy: [],
    pomieszczenia: [],
    rodzaje: [],
    kolekcja: "",
    material: "",
    pomieszczenie: "",
    rodzaj: "",
    username: "dfs",
    password: "sdf",
  };
  getMebleList = () => {
    fetch(listaProduktow)
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
          meble: data.data,
        });
      })
      .catch((error) => console.log(error));
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

  componentDidMount() {
    this.getMebleList();
    this.getKolekcjeList();
    this.getMaterialyList();
    this.getPomieszczeniaList();
    this.getRodzajeList();
  }

  postMebleList = (reqOptions) => {
    console.log(API + reqOptions);
    const url = API + reqOptions;
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.title, data.data);
        this.setState({
          meble: data.data,
        });
      });
  };

  handleDeleteFilters = () => {
    this.getMebleList();

    this.setState({
      kolekcja: "",
      material: "",
      pomieszczenie: "",
      rodzaj: "",
    });
  };
  handleFilteringChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFilteringSubmit = (e) => {
    e.preventDefault();
    const { kolekcja, material, pomieszczenie, rodzaj } = this.state;
    var reqOptions = `filtruj?kolekcja=${kolekcja}&material=${material}&pomieszczenie=${pomieszczenie}&rodzaj=${rodzaj}`;
    this.postMebleList(reqOptions);
  };
  handleLoginChange = (e) => {
    console.log(e.target.type);
    console.log(e.target.name);
    const name = e.target.value;
    const value = e.target.value;
    this.setState = {
      [name]: value,
    };
  };

  render() {
    const meble = this.state.meble;
    console.log("kolekcja: ", this.state.kolekcja);
    return (
      <div className={"App"}>
        <NavBar
          handleLoginChange={this.state.handleLoginChange}
          user={this.state.user}
          pwd={this.state.pwd}
        />
        <Sliders />
        <section className="katalogProduktow">
          <MebleFilteringPanel
            kolekcja={this.state.kolekcja}
            material={this.state.material}
            pomieszczenie={this.state.pomieszczenie}
            rodzaj={this.state.rodzaj}
            kolekcje={this.state.kolekcje}
            materialy={this.state.materialy}
            pomieszczenia={this.state.pomieszczenia}
            rodzaje={this.state.rodzaje}
            handleFilteringSubmit={this.handleFilteringSubmit}
            handleFilteringChange={this.handleFilteringChange}
            handleDeleteFilters={this.handleDeleteFilters}
          />
          <MebleList meble={meble} poziomDostepu={this.state.poziomDostepu} />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
