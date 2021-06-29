import React, { Component } from "react";
// import Axios from "axios";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Sliders from "./Sliders/Sliders";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import Newsletter from "./Newsletter/Newsletter";
import AboutUs from "./AboutUs/AboutUs";
import Shop from "./Shop/Shop";
import LoginPanel from "./LoginPanel/LoginPanel";
import Gallery from "./Gallery/Gallery";

class App extends Component {
  state = {
    islogged: false,
    message: null,
    errorsList: "",
    isActiveLogPanel: false,
    accessLevel: 0,
    email: "",
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

    fetch("http://localhost:5000/users/login", {
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
        // console.log("bledy z logowania:", data.errors);
        console.log(data);

        if (data.authenticated) {
          localStorage.setItem("token", data.accessToken);
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
    fetch("http://localhost:5000/users/logout", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
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
        console.log(data);
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
    // Axios.defaults.withCredentials = true;
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
            message={this.state.message}
            errorsList={this.state.errorsList}
            handleShowLoginPanel={this.handleShowLoginPanel}
            email={this.state.email}
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

// handleLogout = () => {
//   fetch("http://localhost:5000/users/logout")
//     .then((response) => {
//       if (response.ok) {
//         return response;
//       }
//       throw Error(response.status);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       this.setState({
//         message: data.message,
//         islogged: data.islogged,
//         accessLevel: data.accessLevel,
//       });
//     })
//     .catch((error) => console.log(error));
// };
