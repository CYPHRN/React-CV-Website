import React, { useState, useEffect } from "react";
import "../App.css";

import RegistrationImg from "../../assets/featured-project/Registration.jpg";
import LoginImg from "../../assets/featured-project/Login.jpg";
import DashboardImg from "../../assets/featured-project/Dashboard.jpg";
import ProfileImg from "../../assets/featured-project/Profile.jpg";
import CommunityForumImg from "../../assets/featured-project/Community-Forum.jpg";

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoAdvance, setIsAutoAdvance] = useState(true);

  // Use imported images instead of file paths
  const images = [
    RegistrationImg,
    LoginImg,
    DashboardImg,
    ProfileImg,
    CommunityForumImg,
  ];

  const goToPrevious = (event) => {
    setIsAutoAdvance(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

    const button = event.target;
    button.classList.add("arrow-clicked");
    setTimeout(() => {
      button.classList.remove("arrow-clicked");
    }, 1000);
  };

  const goToNext = (event) => {
    setIsAutoAdvance(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

    const button = event.target;
    button.classList.add("arrow-clicked");
    setTimeout(() => {
      button.classList.remove("arrow-clicked");
    }, 1000);
  };

  useEffect(() => {
    if (!isAutoAdvance) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoAdvance, images.length]);

  return (
    <div onMouseEnter={() => setIsAutoAdvance(false)} className="position">
      <img
        className="imagefp"
        src={images[currentIndex]}
        alt="Project Screenshot"
      />
      <button onClick={goToPrevious} className="leftArrow arrow">
        ⟨
      </button>
      <button onClick={goToNext} className="rightArrow arrow">
        ⟩
      </button>
    </div>
  );
}

export default ImageCarousel;
