import React from "react";
import "./AddEditDeleteParametr.css";
import AddParametr from "./AddParametr";
import EditParametr from "./EditParametr";
import DeleteParametr from "./DeleteParametr";

// const listaKolekcji = "http://localhost:5000/listaKolekcji";
// const listaMaterialow = "http://localhost:5000/listaMaterialow";
// const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
// const listaRodzajow = "http://localhost:5000/listaRodzajow";

class AddEditDeleteParametr extends React.Component {
  state = { isActiveAdd: false, isActiveDelete: false, isActiveEdit: false };

  showAddPanel = (e) => {
    this.setState({
      isActiveAdd: !this.state.isActiveAdd,
      isActiveDelete: false,
      isActiveEdit: false,
    });
  };
  showDeletePanel = (e) => {
    this.setState({
      isActiveAdd: false,
      isActiveDelete: !this.state.isActiveDelete,
      isActiveEdit: false,
    });
  };
  showEditPanel = (e) => {
    this.setState({
      isActiveAdd: false,
      isActiveDelete: false,
      isActiveEdit: !this.state.isActiveEdit,
    });
  };
  render() {
    return (
      <div className={"paneloption"}>
        <label>{this.props.title} </label>
        <button onClick={this.showAddPanel} className={"adminpanelbtn"}>
          DODAJ
        </button>

        <button onClick={this.showDeletePanel} className={"adminpanelbtn"}>
          USUN
        </button>
        <button onClick={this.showEditPanel} className={"adminpanelbtn"}>
          EDYTUJ
        </button>
        {this.state.isActiveAdd ? (
          <AddParametr showAddPanel={this.showAddPanel} />
        ) : null}
        {this.state.isActiveDelete ? (
          <DeleteParametr
            itemsList={this.props.itemsList}
            showDeletePanel={this.showDeletePanel}
          />
        ) : null}
        {this.state.isActiveEdit ? (
          <EditParametr
            itemsList={this.props.itemsList}
            showEditPanel={this.showEditPanel}
          />
        ) : null}
      </div>
    );
  }
}

export default AddEditDeleteParametr;
