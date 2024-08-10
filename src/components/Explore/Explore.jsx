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
        Exploring electric vehicles (EVs) is an exciting journey into the future of transportation, offering a glimpse into the innovations that are reshaping how we travel.
        As the world shifts towards sustainability, EVs stand out for their eco-friendly technology, which significantly reduces carbon emissions and reliance on fossil fuels.
        From sleek sedans to versatile SUVs and even electric trucks, the variety of EVs available today caters to a wide range of preferences and needs.
        Beyond their environmental benefits, electric vehicles offer impressive performance, with instant torque providing quick acceleration and a quiet, smooth ride.
        As charging infrastructure continues to expand, the convenience of owning an EV increases, making it easier than ever to transition from traditional gas-powered vehicles.
        Whether you're interested in cutting-edge technology, reducing your carbon footprint, or simply enjoying the thrill of driving a modern, efficient car, exploring electric vehicles opens up a world of possibilities.
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
