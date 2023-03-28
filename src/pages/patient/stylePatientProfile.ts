import styled from "styled-components";

export const PatientContainer = styled.div`
  background: rgb(200, 200, 200);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10px 0 10px;
`;

export const PPContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  margin: 100px 10px 10px 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PatientNotePsychologistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    /* flex-direction: row; */
  }
`;

export const PatientOptions = styled.div`
  width: 100%;
  max-width: 240px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;



// Estilização do perfil do Psicólogo 

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

  @media (max-width: 600px) {
    max-width: 100%;
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
