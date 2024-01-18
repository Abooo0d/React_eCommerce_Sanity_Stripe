"use client";
import React, { useState } from "react";

const DetailsImage = ({ images }) => {
  const [Index, setIndex] = useState(0);
  return (
    <div>
      <div className="image-container">
        <img
          src={images && images[Index]}
          alt="Product Image"
          className="product-detail-image"
        />
      </div>
      <div className="small-images-container">
        {images.map((img, i) => (
          <img
            src={img}
            key={i}
            className={
              i == Index ? "small-image selected-image" : "small-image"
            }
            onClick={() => {
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsImage;
