import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Testimonial } from './Testimonial';
import { StyledCarouselWrapper, StyledTitle, StyledSubtitle } from './StyleCarosel'

interface CarouselProps {
  testimonials: Testimonial[];
  interval?: number;
}

interface CardProps {
  isActive: boolean;
}

const StyledCarousel = styled.ul`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  list-style-type: none;
  height: 220px;
`;

const StyledCard = styled.li<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
`;

const StyledAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const StyledName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const StyledText = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Carousel: React.FC<CarouselProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const handleMouseEnter = () => clearInterval(interval);

  const handleMouseLeave = () => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex => (activeIndex + 5) % testimonials.length);
    }, 5000);
  };

  return (
    <StyledCarousel onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {testimonials.map((testimonial, index) => (
        <StyledCard key={index} isActive={index === activeIndex}>
          <StyledAvatar src={testimonial.avatar} alt={`Foto de ${testimonial.name}`} />
          <StyledName>{testimonial.name}</StyledName>
          <StyledText>{testimonial.text}</StyledText>
        </StyledCard>
      ))}
    </StyledCarousel>
  );
};

export default Carousel;
