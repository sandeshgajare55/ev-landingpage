import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container">
      <h1 className="heading"> About Electric Vehicles</h1>
      <p className="paragraph">
        Electric vehicles (EVs) are revolutionizing the automotive industry.
        They are powered by electric motors, using energy stored in rechargeable
        batteries. Unlike traditional internal combustion engine vehicles, EVs
        produce zero emissions, making them an eco-friendly alternative that
        helps reduce greenhouse gas emissions and air pollution.
      </p>
      <h2 className="subheading">Benefits of EVs</h2>
      <ul className="list">
        <li>Zero Tailpipe Emissions</li>
        <li>Lower Operating Costs</li>
        <li>Quiet and Smooth Operation</li>
        <li>Incentives and Tax Credits</li>
        <li>Reducing Dependence on Fossil Fuels</li>
      </ul>
      <h2 className="subheading">How EV Technology Works</h2>
      <p className="paragraph">
        EVs are powered by electricity from the grid, which charges the battery
        pack in the vehicle. The electric motor then uses this stored energy to
        drive the wheels. Modern EVs feature regenerative braking, which
        captures energy usually lost during braking and feeds it back into the
        battery.
      </p>
      <h2 className="subheading">Environmental Impact</h2>
      <p className="paragraph">
        The adoption of EVs plays a crucial role in reducing the carbon
        footprint of the transportation sector. By switching to electric, we can
        significantly cut down on emissions, leading to cleaner air and a
        healthier planet.
      </p>
    </div>
  );
}


export default About;
