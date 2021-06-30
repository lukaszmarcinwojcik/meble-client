import React from "react";
import "./DeleteParameter.css";

class DeleteParameter extends React.Component {
  state = { activeParameterId: "-1" };
  handleParameterChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleDeleteParameter = (e) => {
    e.preventDefault();
    if (this.state.activeParameterId === "-1") {
      alert("Proszę wybrać parametr do usunięcią");
      return;
    }
    let deleteParam =
      "http://localhost:5000/admin/delete/" +
      this.props.parameterName +
      "/" +
      this.state.activeParameterId;

    fetch(deleteParam, {
      method: "DELETE",
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
          alert("usunieto parametr");
          this.props.updateParameters();
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
        <label className={"adminpanelbtn"}>USUN</label>
        <select
          className={"adminpanelbtn"}
          value={this.state.activeParameterId}
          name={"activeParameterId"}
          onChange={this.handleParameterChange}
        >
          {itemsList}
        </select>
        <button
          className={"adminpanelbtn"}
          onClick={this.handleDeleteParameter}
        >
          USUN
        </button>
        <button
          className={"adminpanelbtn"}
          onClick={this.props.showDeletePanel}
        >
          ANULUJ
        </button>
      </div>
    );
  }
}

export default DeleteParameter;
