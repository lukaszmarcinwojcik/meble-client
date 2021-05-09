import React, { Component } from "react";
import "./App.css";
import MebleList from "./MebleList";
import MebleFilteringPanel from "./MebleFilteringPanel";
import NavBar from "./NavBar";
import Sliders from "./Sliders";
import PanelLogowania from "./PanelLogowania";
import Footer from "./Footer";

const API = "http://localhost:5000/";
const listaProduktow = "http://localhost:5000/listaProduktow";
const listaKolekcji = "http://localhost:5000/listaKolekcji";
const listaMaterialow = "http://localhost:5000/listaMaterialow";
const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
const listaRodzajow = "http://localhost:5000/listaRodzajow";

class App extends Component {
  state = {
    islogged: false,
    loginMessage: null,
    isActiveLogPanel: false,
    poziomDostepu: 0,
    meble: [],
    kolekcje: [],
    materialy: [],
    pomieszczenia: [],
    rodzaje: [],
    kolekcja: "",
    material: "",
    pomieszczenie: "",
    rodzaj: "",
    username: "",
    password: "",
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
  handleShowLoginPanel = () => {
    // console.log(this.state.isActiveLogPanel, "sasasasa");
    this.setState({
      isActiveLogPanel: !this.state.isActiveLogPanel,
    });
  };
  handleLoginChange = (e) => {
    // console.log(e.target.type, "targettype");
    // console.log(e.target.name, "targetname");
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        login: this.state.username,
        password: this.state.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loginMessage: data.loginMessage,
          islogged: data.islogged,
          poziomDostepu: data.poziomDostepu,
        });
      });
    this.setState({
      username: "",
      password: "",
    });
  };
  handleLogout = () => {
    fetch("http://localhost:5000/logout")
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loginMessage: data.loginMessage,
          islogged: data.islogged,
          poziomDostepu: data.poziomDostepu,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className={"App"}>
        <NavBar handleShowLoginPanel={this.handleShowLoginPanel} />

        {this.state.isActiveLogPanel ? (
          <PanelLogowania
            handleLogout={this.handleLogout}
            islogged={this.state.islogged}
            loginMessage={this.state.loginMessage}
            handleShowLoginPanel={this.handleShowLoginPanel}
            username={this.state.username}
            password={this.state.password}
            handleLoginChange={this.handleLoginChange}
            handleLoginSubmit={this.handleLoginSubmit}
          />
        ) : null}

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
          <MebleList
            meble={this.state.meble}
            poziomDostepu={this.state.poziomDostepu}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
