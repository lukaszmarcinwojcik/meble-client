import React from "react";
import "./Gallery.css";
import ImageCard from "./ImageCard";
// import "./MenuBar";
// import MenuBar from "./MenuBar";

const images = [
  {
    id: "1",
    imageName:
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg",
  },
  {
    id: "2",
    imageName:
      "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg",
  },
  {
    id: "3",
    imageName:
      "https://cdn.pixabay.com/photo/2019/12/16/15/43/room-4699578_960_720.jpg",
  },
  {
    id: "4",
    imageName:
      "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_960_720.jpg",
  },
  {
    id: "5",
    imageName:
      "https://cdn.pixabay.com/photo/2015/06/08/15/20/rec-room-802017_960_720.jpg",
  },
  {
    id: "6",
    imageName:
      "https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367_960_720.jpg",
  },
  {
    id: "7",
    imageName:
      "https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_960_720.jpg",
  },
  {
    id: "8",
    imageName:
      "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_960_720.jpg",
  },
  {
    id: "9",
    imageName:
      "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
  },
  {
    id: "10",
    imageName:
      "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_960_720.jpg",
  },
  {
    id: "11",
    imageName:
      "https://cdn.pixabay.com/photo/2016/07/26/18/30/kitchen-1543493_960_720.jpg",
  },
  {
    id: "12",
    imageName:
      "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg",
  },
  {
    id: "13",
    imageName:
      "https://cdn.pixabay.com/photo/2018/10/28/12/37/bedroom-3778695_960_720.jpg",
  },
  {
    id: "14",
    imageName:
      "https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940168_960_720.jpg",
  },
  {
    id: "15",
    imageName:
      "https://cdn.pixabay.com/photo/2014/04/26/00/41/dining-room-332207_960_720.jpg",
  },
];

class Gallery extends React.Component {
  state = { isActiveMenu: false };

  handleShowMenu = () => {
    this.setState({
      isActiveMenu: !this.state.isActiveMenu,
    });
  };
  render() {
    const imageList = images.map((image) => (
      <ImageCard key={image.id} imageName={image.imageName} />
    ));
    return (
      <section id={"gallery"} className="gallery">
        <div className={"separator"}></div>
        <h1 className={"galleryTitle"}>
          Zachęcamy do zapoznania się z naszymi pracami
        </h1>
        <div className={"galleryContainer"}>{imageList}</div>
      </section>
    );
  }
}

export default Gallery;
