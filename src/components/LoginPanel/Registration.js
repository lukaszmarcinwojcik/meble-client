import React from "react";
// import "./DeleteEditProdukt.css";

const ErrorsList = (props) => {
  let errorsList = props.errorsList.map((error) => (
    <p className={"error"} key={error.message}>
      {error.message}
    </p>
  ));
  return errorsList;
};

class Registration extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
    errorsList: "",
    message: "",
  };
  handleRegistrationChange = (e) => {
    console.log(e.target.value);
    const type = e.target.type;
    const name = e.target.name;
    if (
      type === "text" ||
      type === "email" ||
      type === "password" ||
      type === "password2"
    ) {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };
  handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const { name, surname, email, password, password2 } = this.state;
    fetch("http://localhost:5000/users/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password,
        password2: password2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("to mi zwrocilo: ", data);
        this.setState({
          errorsList: data.errors,
          message: data.message,
          /////
        });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleRegistrationSubmit}>
        <h2>
          Masz już konto?{" "}
          <span className={"reglogbtn"} onClick={this.props.handleSwitchLogReg}>
            Przejdz do Logowania
          </span>
        </h2>

        <label className={"loginlabel"} htmlFor="name">
          Imie:
          <input
            className={"logPanel"}
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleRegistrationChange}
          />
        </label>
        <label className={"loginlabel"} htmlFor="surname">
          Nazwisko:
          <input
            className={"logPanel"}
            type="text"
            id="surname"
            name="surname"
            value={this.state.surname}
            onChange={this.handleRegistrationChange}
          />
        </label>
        <label className={"loginlabel"} htmlFor="email">
          Email:
          <input
            className={"logPanel"}
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleRegistrationChange}
          />
        </label>
        <label className={"loginlabel"} htmlFor="password">
          Haslo:
          <input
            className={"logPanel"}
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleRegistrationChange}
          />
        </label>
        <label className={"loginlabel"} htmlFor="password">
          Powtorz haslo:
          <input
            className={"logPanel"}
            type="password"
            id="password2"
            name="password2"
            value={this.state.password2}
            onChange={this.handleRegistrationChange}
          />
        </label>
        <div>
          <button className={"btnform"} type={"submit"}>
            ZAREJESTRUJ
          </button>
        </div>
        <button className={"btnform"} onClick={this.props.handleShowLoginPanel}>
          Zamknij
        </button>
        {this.state.errorsList ? (
          <ErrorsList errorsList={this.state.errorsList} />
        ) : null}
        {this.state.message ? (
          <p className={"newsletterMsg"}>{this.state.message}</p>
        ) : null}
      </form>
    );
  }
}

export default Registration;
