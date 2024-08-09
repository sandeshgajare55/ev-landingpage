import React from "react";
import Background from "../Background/Background";
import image1 from "../../assets/image1.png"; //imported the image
import image2 from "../../assets/image2.png"; //imported the image
import image3 from "../../assets/image3.png"; //imported the image
import'./Explore.css';
function Explore() {
  return (
    <div className="explore-container">
      <h1 className="explore-heading">Explore Electric Vehicles</h1>
      <p className="explore-paragraph">
        Discover the latest innovations in electric vehicles.
        From cutting-edge technology to sustainable practices, explore how the automotive industry is transforming.
      </p>
      <div className="explore-gallery">
        <img
          src={image1}
          alt="EV 1"
          className="explore-image"
        />&nbsp;
        &nbsp;
        <img
          src={image2}
          alt="EV 2"
          className="explore-image"
        />&nbsp;
        &nbsp;
        <img
          src={image3}
          alt="EV 3"
          className="explore-image"
        />
      </div>
    </div>
  );
}

export default Explore;
