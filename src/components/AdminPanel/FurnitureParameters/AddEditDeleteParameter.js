import React from "react";
import "./AddEditDeleteParameter.css";
import AddParameter from "./AddParameter";
import EditParameter from "./EditParameter";
import DeleteParameter from "./DeleteParameter";

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
          <AddParameter
            parameterName={this.props.parameterName}
            handleAddParameter={this.props.handleAddParameter}
            title={this.props.title}
            showAddPanel={this.showAddPanel}
            updateParameters={this.props.updateParameters}
          />
        ) : null}
        {this.state.isActiveDelete ? (
          <DeleteParameter
            parameterName={this.props.parameterName}
            itemsList={this.props.itemsList}
            showDeletePanel={this.showDeletePanel}
            updateParameters={this.props.updateParameters}
          />
        ) : null}
        {this.state.isActiveEdit ? (
          <EditParameter
            parameterName={this.props.parameterName}
            itemsList={this.props.itemsList}
            showEditPanel={this.showEditPanel}
            updateParameters={this.props.updateParameters}
          />
        ) : null}
      </div>
    );
  }
}

export default AddEditDeleteParameter;
