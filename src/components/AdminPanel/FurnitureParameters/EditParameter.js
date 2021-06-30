import React from "react";
import "./EditParameter.css";

class EditParameter extends React.Component {
  state = { activeParameterId: "-1", newParameter: "" };
  handleParameterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleEditParameter = (e) => {
    e.preventDefault();
    if (
      this.state.newParameter === "" &&
      this.state.activeParameterId === "-1"
    ) {
      alert(
        "Proszę wybrać parametr do zmiany oraz wpisać nową nazwe parametru"
      );
      return;
    } else if (this.state.newParameter === "") {
      alert("Proszę wpisać nową nazwę parametru");
      return;
    } else if (this.state.activeParameterId === "-1") {
      alert("Proszę wybrać parametr do zmiany");
      return;
    }
    let editParam =
      "https://meble-api.herokuapp.com/admin/edit/" + this.props.parameterName;

    fetch(editParam, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state.activeParameterId,
        newName: this.state.newParameter,
      }),
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          localStorage.clear();
          alert(data.error);
          window.location.reload(true);
        } else {
          alert("zmieniono parametr");
          this.props.updateParameters();
          this.setState({
            activeParameterId: "-1",
            newParameter: "",
          });
        }
      });
  };
  render() {
    let itemsList = [{ _id: "-1", name: "wybierz" }].concat(
      this.props.itemsList
    );
    itemsList = itemsList.map((item) => (
      <option key={item._id} value={item._id}>
        {item.name}
      </option>
    ));
    return (
      <div>
        <label className={"adminpanelbtn"}>EDYTUJ</label>
        <select
          className={"adminpanelbtn"}
          value={this.state.activeParameterId}
          name={"activeParameterId"}
          onChange={this.handleParameterChange}
        >
          {itemsList}
        </select>
        <input
          className={"adminpanelbtn"}
          type={"text"}
          value={this.state.newParameter}
          name={"newParameter"}
          onChange={this.handleParameterChange}
        ></input>
        <button className={"adminpanelbtn"} onClick={this.handleEditParameter}>
          EDYTUJ
        </button>
        <button className={"adminpanelbtn"} onClick={this.props.showEditPanel}>
          ANULUJ
        </button>
      </div>
    );
  }
}

export default EditParameter;
