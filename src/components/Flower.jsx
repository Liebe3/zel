import React from "react";
import { IoMdFlower } from "react-icons/io";
import "./Flower.css";

const Flower = () => {
  return (
    <div className="flowers-container">
      <div className="flowers-card">
        <h1 className="flowers-title">
          Hello Zelitot! Here's a tulips flower just for you!!!{" "}
          <IoMdFlower className="flower-icon" />
        </h1>
        <div className="image-container">
          <img
            src="https://media.tenor.com/0RcoJ9veHOYAAAAi/flowers.gif"
            alt="Animated flower"
            className="flower-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Flower;
