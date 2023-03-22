import styled from 'styled-components';
import Imagem from '../../assets/img/background.jpg';

export const Header = styled.header`
  background-image: url(${Imagem});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    height: 250px;
    margin-bottom: 16px;
  }

  & > h1 {
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 1px  black;
  }
`;

export const Card = styled.div`
max-width: 100%;
padding: 2em;
text-align: center;
position: relative;
width: 25%;
height: 150px;
border-radius: 20px;
border: 1px solid #fff;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
padding: 1rem;
cursor: pointer;
transition: all 0.2s ease-in-out;
margin: 30px;
text-shadow: 1px 1px 1px  black;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

h3 {
  color: #ffffff;
  max-width: 20em;
  font-size: 1.5rem;
  margin: 0 auto;
  line-height: 1.2;
  word-wrap: break-word;
}

@media screen and (max-height: 610px) {
  height: 100%;
}
`;

export const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  & > img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 16px;
    object-fit: cover;
  }

  & > p {
    margin: 16px;
    font-size: 18px;
    color: #333;
    text-align: justify;
  }

  & > h3 {
    margin: 16px;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }
`;

export const TestimonialCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 32px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  & > ${TestimonialCard} {
    flex: 0 0 auto;
    scroll-snap-align: center;
    margin: 0 16px;
    width: 400px;
  }
`;

export const Footer = styled.footer`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;

  & > a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }
`;
