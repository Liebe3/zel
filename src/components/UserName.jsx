import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const UserName = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleVirtualuHug = (e) => {
    e.preventDefault();
    navigate("/hug");
  };

  const handleLeteer = (e) => {
    e.preventDefault();
    navigate("/letter");
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4">
      <div
        className={`text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-bounce">
          Happy 23rd Birthday Berooo!
          <FaHeart
            className="inline-block ml-2 text-red-500 animate-pulse"
            size={48}
          />
        </h1>
        <p className="text-xl md:text-2xl text-pink-100 mb-8">
          Wishing you an amazing birthday filled with joy and laughter! 🎉
        </p>
        <div className="space-y-4">
          <button
            className="bg-white text-pink-500 px-6 py-3 m-2 rounded-full font-semibold text-lg hover:bg-pink-100 transition-colors duration-300"
            onClick={handleVirtualuHug}
          >
            Birthday Hug
          </button>
          <button
            className="bg-pink-500 text-white px-6 py-3 m-2 rounded-full font-semibold text-lg hover:bg-pink-600 transition-colors duration-300"
            onClick={handleLeteer}
          >
            Birthday Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserName;
