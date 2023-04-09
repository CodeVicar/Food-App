import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="text">
            <p>Always</p>
          </div>
          <h1>Served Fresh</h1>
          <h1>Daily</h1>
          <button className="btn">Delivery</button>
          <button className="btn">Takeout</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
