'use client';

import React, { useState, useEffect } from 'react';

export function Gallery() {
  const images = [
    "/images/IMG_1050.jpg",
    "/images/IMG_1062.png",
    "/images/IMG_1196.png",
    "/images/IMG_1214.png",
    "/images/IMG_1285.png",
    "/images/IMG_1327.png",
    "/images/IMG_1379.png",
    "/images/IMG_1398.jpg",
    "/images/IMG_1750.png",
    "/images/IMG_1853.png",
    "/images/IMG_1917.png",
    "/images/IMG_2190.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-video">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
