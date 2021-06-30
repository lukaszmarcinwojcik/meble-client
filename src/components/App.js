import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Slider from "./Slider/Slider";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import Newsletter from "./Newsletter/Newsletter";
import AboutUs from "./AboutUs/AboutUs";
import Shop from "./Shop/Shop";
import LoginPanel from "./LoginPanel/LoginPanel";
import Gallery from "./Gallery/Gallery";

class App extends Component {
  state = {
    message: null,
    errorsList: "",
    isActiveLogPanel: false,

    email: "",
    password: "",
  };

  handleShowLoginPanel = () => {
    this.setState({
      isActiveLogPanel: !this.state.isActiveLogPanel,
    });
  };
  handleLoginChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();

    fetch("https://meble-api.herokuapp.com/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.authenticated) {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("accessLevel", data.accessLevel);
          localStorage.setItem("islogged", data.islogged);
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        this.setState({
          errorsList: data.errors,
          message: data.message,
          islogged: data.islogged,
          accessLevel: data.accessLevel,
          email: data.email,
          password: "",
        });
      });
  };
  handleLogout = () => {
    fetch("https://meble-api.herokuapp.com/users/logout", {
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        localStorage.clear();
        this.setState({
          message: data.message,
          islogged: data.islogged,
          accessLevel: data.accessLevel,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const accessLevel = JSON.parse(localStorage.getItem("accessLevel"));
    const islogged = JSON.parse(localStorage.getItem("islogged"));
    return (
      <div className={"App"}>
        <NavBar
          handleShowLoginPanel={this.handleShowLoginPanel}
          isActiveLogPanel={this.state.isActiveLogPanel}
        />

        {this.state.isActiveLogPanel ? (
          <LoginPanel
            handleLogout={this.handleLogout}
            islogged={islogged}
            message={this.state.message}
            errorsList={this.state.errorsList}
            handleShowLoginPanel={this.handleShowLoginPanel}
            email={this.state.email}
            password={this.state.password}
            handleLoginChange={this.handleLoginChange}
            handleLoginSubmit={this.handleLoginSubmit}
          />
        ) : null}

        <Slider />

        <Shop
          islogged={islogged}
          isActiveLogPanel={this.state.isActiveLogPanel}
          accessLevel={accessLevel}
        />
        <Gallery />
        <Blog />
        <Newsletter />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
