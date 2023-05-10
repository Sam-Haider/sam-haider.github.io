import React from "react";

const PreloadImages = () => {
  const imagesToPreload = [
    "images/MeAtTheComputer.jpg",
    "images/brain.jpg",
    "images/laptop.jpg",
    "images/phone.jpg",
  ];

  return (
    <div style={{ display: "none" }}>
      {imagesToPreload.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt="preload" />
      ))}
    </div>
  );
};

export default PreloadImages;
