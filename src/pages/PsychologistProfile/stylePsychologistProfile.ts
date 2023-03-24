import styled from "styled-components";
import Background from "../../assets/img/background2.png";

export const Body = styled.div`
position: relative;
background-image: url(${Background});
background-size: cover;
background-position: center;
background-attachment: fixed;
display: flex;
height: 100vh;
flex-wrap: wrap;

`;

export const Div1 = styled.div`
  flex: 1;
  background-color: rgb(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #ffffff;
  border-radius: 1rem;
  margin: 3rem 1rem 3rem 5rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 5.9);
`;

export const Div2 = styled.div`
  flex: 1;
  background-color: rgb(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #ffffff;
  border-radius: 1rem;
  margin: 3rem 1rem 3rem 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 5.9);
`;

export const Div3 = styled.div`
flex: 1;
background-color: rgb(255, 255, 255, 0.5);
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
border: 1px solid #ffffff;
border-radius: 1rem;
margin: 3rem 5rem 3rem 1rem;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 5.9);
`;