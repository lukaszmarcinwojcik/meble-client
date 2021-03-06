import React from "react";
import "./AddParameter.css";

class AddParameter extends React.Component {
  state = {
    newParameter: "",
  };

  handleParameterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleAddParameter = (e) => {
    if (this.state.newParameter === "") {
      alert("Proszę wpisać nazwę nowego parametru");
      return;
    }
    let addParam =
      "https://meble-api.herokuapp.com/admin/add/" + this.props.parameterName;
    let value = this.state.newParameter;

    fetch(addParam, {
      method: "POST",
      body: JSON.stringify({
        value: value,
      }),
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          localStorage.clear();
          alert(data.error);
          window.location.reload(true);
        } else {
          alert("dodano nowy parametr");
          this.props.updateParameters();
          this.setState({
            newParameter: "",
          });
        }
      });
  };
  render() {
    return (
      <div>
        <label>DODAJ</label>
        <input
          className={"adminpanelbtn"}
          type={"text"}
          value={this.state.newParameter}
          name={"newParameter"}
          onChange={this.handleParameterChange}
        ></input>
        <button className={"adminpanelbtn"} onClick={this.handleAddParameter}>
          DODAJ
        </button>

        <button className={"adminpanelbtn"} onClick={this.props.showAddPanel}>
          ANULUJ
        </button>
      </div>
    );
  }
}

export default AddParameter;
