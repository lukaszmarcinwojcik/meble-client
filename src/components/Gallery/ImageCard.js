import React from "react";
import "./ImageCard.css";
// import "./MenuBar";
// import MenuBar from "./MenuBar";

class ImageCard extends React.Component {
  state = { isActiveImage: false };

  handleShowImage = () => {
    this.setState({
      isActiveImage: !this.state.isActiveImage,
    });
  };
  render() {
    const enlargeImage = (
      <div className={"enlargeImageCard"}>
        <img
          className={"enlargeImage"}
          src={`${this.props.imageName}`}
          alt=""
        ></img>
      </div>
    );
    return (
      <div
        key={this.props.id}
        className={"imageCard"}
        onClick={this.handleShowImage}
      >
        <img className={"image"} src={`${this.props.imageName}`} alt=""></img>
        {this.state.isActiveImage ? enlargeImage : null}
      </div>
    );
  }
}

export default ImageCard;
