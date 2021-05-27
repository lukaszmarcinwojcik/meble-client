import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Sliders from "./Sliders/Sliders";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import Newsletter from "./Newsletter/Newsletter";
import AboutUs from "./AboutUS/AboutUs";
import Shop from "./Shop/Shop";
import LoginPanel from "./LoginPanel/LoginPanel";

class App extends Component {
  state = {
    islogged: false,
    loginMessage: null,
    isActiveLogPanel: false,
    accessLevel: 0,
    username: "",
    password: "",
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
          accessLevel: data.accessLevel,
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
          accessLevel: data.accessLevel,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className={"App"}>
        <NavBar
          handleShowLoginPanel={this.handleShowLoginPanel}
          isActiveLogPanel={this.state.isActiveLogPanel}
        />

        {this.state.isActiveLogPanel ? (
          <LoginPanel
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
        {/* <section id="shop" className="katalogProduktow"></section> */}
        <Shop
          islogged={this.state.islogged}
          isActiveLogPanel={this.state.isActiveLogPanel}
          accessLevel={this.state.accessLevel}
        />
        <Blog />
        <Newsletter />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
