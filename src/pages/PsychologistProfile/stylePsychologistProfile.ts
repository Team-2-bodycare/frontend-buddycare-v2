import styled from "styled-components";
import Background from "../../assets/img/background2.png";

export const Body = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  padding-top: 23px;
  height: 100vh;
  flex-wrap: wrap;
`;

export const Div1 = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  margin: 0rem 1rem 0rem 5rem;


  @media (max-width: 768px) {
    margin: 2rem 0.5rem;
  }

  @media (max-width: 576px) {
    margin: 1rem 0.5rem;
    flex-basis: 100%;
  }
`;

export const StyleMenu = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0.5rem;
  width: 100%;
  height: 80px;
  margin-bottom: 1rem;
  background-color: rgba(255, 255, 255);
`;

export const ListPacient = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 29rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255);
  overflow: auto;
`;


  export const DivCard = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  `;

  export const StyleLi = styled.li`
    display: flex;
    width: 90%;
    height: 165px;
    flex-direction: column;
    text-align: center;
    margin-top: .8rem;
  
    border-radius: 20px;
    border: 1px solid #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    background-color: rgb(230, 230, 230);
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    }

  `;

export const Div2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: 0rem 1rem 0rem 1rem;

  @media (max-width: 768px) {
    margin: 2rem 0.5rem;
  }

  @media (max-width: 576px) {
    margin: 1rem 0.5rem;
    flex-basis: 100%;
  }
`;

export const SubDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  padding: 0.5rem 2rem;
  background-color: rgba(255, 255, 255);
  width: 100%;
  height: 400px;

  p {
    color: #333333;
  }
`;

export const SubDiv2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border-radius: 20px;
padding: 0.5rem 2rem;
background-color: #3399ff;
margin-top: 1rem;
width: 100%;
height: 150px;
`;

export const StyleButton = styled.button`
  border-radius: 3rem;
  background-color: #0099ff;
  color: #f2f2f2;
  border: none;
  width: 7rem;
  height: 1.9rem;
  margin-top: .5rem;
  transition: all 0.1s ease-out;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    transform: scale(1.1);
    background-color: #007acc;
  }
`;

export const Div3 = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #ffffff;
  border-radius: 1rem;
  margin: 0rem 5rem 0rem 1rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 5.9);

  @media (max-width: 768px) {
    margin: 2rem 0.5rem;
  }

  @media (max-width: 576px) {
    margin: 1rem 0.5rem;
    flex-basis: 100%;
  }
`;

export const MenuSubA = styled.a`
width: auto;
color: #595959;
padding: 10px 15px;
text-decoration: none;
display: block;
text-align: left;
border-radius: 10px;
background-color: #e6e6e6;


&:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

@media (max-width: 370px) {
  font-size: 15px;
}
`;

