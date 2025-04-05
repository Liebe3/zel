import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const UserName = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className={`card ${isVisible ? "visible" : "hidden"}`}>
        <h1 className="title">
          Happy 23rd Birthday Berooo!
          <FaHeart className="heart-icon" size={48} />
        </h1>
        <p className="subtitle">
          Wishing you an amazing birthday filled with joy and laughter! 🎉
        </p>
        <div>
          <button
            className="button button-primary"
            onClick={() => navigate("/hug")}
          >
            Birthday Hug
          </button>
          <button
            className="button button-secondary"
            onClick={() => navigate("/letter")}
          >
            Birthday Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserName;
