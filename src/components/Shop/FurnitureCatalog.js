import React from "react";
import "./FurnitureCatalog.css";
import AddProduct from "../AdminPanel/AddProduct";
import EditParameters from "../AdminPanel/EditParameters";
import DeleteEditProduct from "../AdminPanel/DeleteEditProduct";

class FurnitureCatalog extends React.Component {
  state = {
    editParametersIsActive: false,
    addProductPanelIsActive: false,
  };
  showAddProductPanel = (e) => {
    console.log("status paneluADD: ", !this.state.addProduktPanelIsActive);
    this.setState({
      addProduktPanelIsActive: !this.state.addProduktPanelIsActive,
      edytujParametryIsActive: false,
    });
  };

  showEditParameters = (e) => {
    console.log("status paneluEDIT: ", !this.state.edytujParametryIsActive);
    this.setState({
      edytujParametryIsActive: !this.state.edytujParametryIsActive,
      addProduktPanelIsActive: false,
    });
  };

  render() {
    const dodajNowyMebel = (
      <button onClick={this.showAddProduktPanel} className={"addNewMebel"}>
        DODAJ NOWY PRODUKT
      </button>
    );

    const edytujParametry = (
      <button onClick={this.showEdytujParametry} className={"addNewMebel"}>
        EDYTUJ PARAMETRY MEBLI
      </button>
    );

    const meble = this.props.meble.map((mebel) => (
      <div className={"mebel"} key={mebel._id}>
        <h2 className={"mebeltitle"}>{`${mebel.nazwa}`}</h2>
        <div className={"mebleDescription"}>
          <p>
            {"kolekcja: "}
            <span>{mebel.kolekcja}</span>
          </p>
          <p>
            {"materiał: "}
            <span>{mebel.material}</span>
          </p>
          <p>
            {"pomieszczenie: "}
            <span>{mebel.pomieszczenie}</span>
          </p>
          <p>{`${mebel.date}`}</p>
        </div>
        <div className={"mebelImg"}>
          {/* <img
            className={"Img"}
            src={mebel.nazwapliku}
            alt={mebel.nazwa}
            
          /> */}
        </div>
        {this.props.accessLevel === 3 ? <DeleteEditProduct /> : null}
      </div>
    ));
    return (
      <div className="mebleList">
        <div className={"mebleListTitle"}>
          <h2>KATALOG MEBLI</h2>
          <h2 onClick={this.props.handleShowCart}>Przejdz do koszyka</h2>
          {this.props.accessLevel === 3 ? dodajNowyMebel : null}
          {this.props.accessLevel === 3 ? edytujParametry : null}
          {this.state.addProductPanelIsActive ? (
            <AddProduct showAddProductPanel={this.state.showAddProductPanel} />
          ) : null}
          {this.state.editParametersIsActive ? (
            <EditParameters
              showEditParameters={this.state.showEditParameters}
            />
          ) : null}
        </div>
        {meble}
      </div>
    );
  }
}

export default FurnitureCatalog;
