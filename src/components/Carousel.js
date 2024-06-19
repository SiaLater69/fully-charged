import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      {/* <button className="right-arrow" onClick={prevSlide}>&#10094;</button> */}
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
