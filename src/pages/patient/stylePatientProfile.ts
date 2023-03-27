import styled from "styled-components";

export const PatientContainer = styled.div`
  background: rgb(200, 200, 200);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 10px 0 10px;
`;

export const PPPsychologistContainer = styled.div`
  width: 100%;
  max-width: 240px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* margin: 100px 10px 30px 10px; */
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;
`;

export const PPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  gap: 10px;
  padding: 10px;
  margin: 100px 10px 30px 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PPName = styled.p`
  font-weight: bold;
  color: rgb(116, 116, 116);
  margin-top: 10px;
`;

export const PPPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const PPButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 220px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: rgb(200, 200, 200);
  font-size: 16px;
  font-weight: bold;
  transition: all 0.8s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
