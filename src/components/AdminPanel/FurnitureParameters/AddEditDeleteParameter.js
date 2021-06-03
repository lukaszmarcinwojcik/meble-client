import React from "react";
import "./AddEditDeleteParameter.css";
import AddParameter from "./AddParameter";
import EditParameter from "./EditParameter";
import DeleteParameter from "./DeleteParameter";

// const listaKolekcji = "http://localhost:5000/listaKolekcji";
// const listaMaterialow = "http://localhost:5000/listaMaterialow";
// const listaPomieszczen = "http://localhost:5000/listaPomieszczen";
// const listaRodzajow = "http://localhost:5000/listaRodzajow";

class AddEditDeleteParameter extends React.Component {
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
          <AddParameter showAddPanel={this.showAddPanel} />
        ) : null}
        {this.state.isActiveDelete ? (
          <DeleteParameter
            itemsList={this.props.itemsList}
            showDeletePanel={this.showDeletePanel}
          />
        ) : null}
        {this.state.isActiveEdit ? (
          <EditParameter
            itemsList={this.props.itemsList}
            showEditPanel={this.showEditPanel}
          />
        ) : null}
      </div>
    );
  }
}

export default AddEditDeleteParameter;
