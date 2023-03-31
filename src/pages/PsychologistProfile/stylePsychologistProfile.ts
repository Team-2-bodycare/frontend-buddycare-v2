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

  @media (max-width: 992px) {
    margin: 2rem 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0.5rem;
  }

  @media (max-width: 576px) {
    margin: 1rem 0.5rem;
    flex-basis: 100%;
  }
`;

export const StyleMenu = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
  height: 100px;
  gap: 5px;
  margin-bottom: 1rem;
`;

export const ListPacient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 430px;
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
  width: 100%;
  height: 165px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 10px;

  border-radius: 20px;
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: #d9d9d9;
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


  @media (max-width: 992px) {
    margin: 2rem 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0.5rem;
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
  overflow: auto;

  p {
    color: #333333;
  }

  @media (max-width: 576px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;


export const SubDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  background-color: #3399ff;
  margin-top: 1rem;
  width: 100%;
  max-width: 600px;
  height: 150px;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
  }
`;


export const StyleButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 60%;
  padding: 4px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  color: rgb(240, 240, 240);
  font-size: 15px;
  transition: all 0.8s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Div3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0rem 5rem 1rem 1rem;


  @media (max-width: 1200px) {
    margin: 2rem;
  }

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

  @media (max-width: 576px) {
    font-size: 15px;
    padding: 8px 12px;
  }
`;

export const MenuButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding: 4px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  color: rgb(200, 200, 200);
  font-size: 13px;
  transition: all 0.8s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const DivCalendar = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border-radius: 20px;
padding: 0.5rem 2rem;
background-color: rgba(255, 255, 255);
width: 100%;
height: 350px;
overflow: auto;

@media (max-width: 576px) {
  width: 100%;
  margin: 0.5rem 0;
}
`;

export const DivNotas = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
border-radius: 20px;
padding: 0.5rem 2rem;
background-color: rgba(255, 255, 255);
width: 100%;
height: 200px;
overflow: auto;

@media (max-width: 576px) {
  width: 100%;
  margin: 0.5rem 0;
}
`
