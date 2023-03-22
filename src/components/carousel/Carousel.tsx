import React, { useState } from 'react';
import { Testimonial, testimonials } from './Testimonial';

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '250px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px',
      }}
    >
      <h2>Depoimentos</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button onClick={handlePrevClick}>Anterior</button>

        <div
          style={{
            backgroundImage: `url(${testimonials[activeIndex].avatar})`,
            backgroundSize: 'cover',
            height: '100px',
            width: '100px',
            borderRadius: '50%',
          }}
        />

        <button onClick={handleNextClick}>Próximo</button>
      </div>

      <h3>{testimonials[activeIndex].name}</h3>
      <p>{testimonials[activeIndex].text}</p>
    </div>
  );
};

export { Carousel };
