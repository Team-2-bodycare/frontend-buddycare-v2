import styled from "styled-components";
import Imagem from "../../assets/img/background.jpg";

export const HomeContainer = styled.div`
  background-color: #bfbfbf;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  background-image: url(${Imagem});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    width: 70%;
    height: 230px;
    margin: 60px 0 16px 0;
  }

  & > h1 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

  @media only screen and (max-width: 768px) {
    height: 300px;

    & > img {
      height: 150px;
    }

    & > h1 {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 480px) {
    height: 200px;

    & > img {
      height: 100px;
    }

    & > h1 {
      font-size: 18px;
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

export const StyleButtton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  height: 100%;
`;
