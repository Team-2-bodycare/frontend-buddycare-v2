import styled from "styled-components";
import Imagem from "../../assets/img/background.jpg";

export const Header = styled.header`
  background-image: url(${Imagem});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;

    margin: 40px 0 20px 0;
  }

  & > h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding-bottom: 20px;
    color: white;
    text-shadow: 1px 1px 1px black;

    @media screen and (max-width: 470px) {
      font-size: 20px;
    }
  }
`;

export const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  padding: 10px;
  margin-top: 20px;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: column;
  padding: 2em;
  text-align: center;

  border-radius: 20px;
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  padding-top: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-shadow: 1px 1px 1px black;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const TitleCard = styled.h3`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 0 auto;
  line-height: 1.2;
  word-wrap: break-word;

  @media screen and (max-height: 610px) {
    height: 100vh;
  }
`;

export const CarrouselContainer =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
