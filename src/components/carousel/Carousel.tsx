import React, { useState } from 'react';

interface Testimonial {
  name: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'João Silva',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus metus et arcu interdum, in commodo nulla malesuada. Integer quis augue eget velit fermentum blandit. Aenean mollis faucibus efficitur. ',
    avatar: '/path/to/avatar-1.jpg',
  },
  {
    name: 'Maria Oliveira',
    text: 'Suspendisse eget ex sapien. Vivamus semper nunc non metus venenatis, ac rhoncus enim pulvinar. Sed ac interdum nisl. Sed vitae ullamcorper eros. Integer suscipit aliquet lacinia. ',
    avatar: '/path/to/avatar-2.jpg',
  },
  {
    name: 'Pedro Souza',
    text: 'Vestibulum sed malesuada eros, vitae interdum arcu. Ut vel est at ipsum vulputate hendrerit. Sed eget nisi condimentum, consectetur metus ut, fermentum velit. Aliquam eu nisl est. Nam at fringilla nisl. ',
    avatar: '/path/to/avatar-3.jpg',
  },
];

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
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <h2>Depoimentos</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
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
            marginLeft: '20px',
            marginRight: '20px',
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
