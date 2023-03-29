import styled from "styled-components";
import background from "../../assets/img/background.jpg";

export const PatientContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
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
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const PPName = styled.p`
  font-weight: bold;
  color: rgb(200, 200, 200);
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

// Menu usuário

export const MenuContainer = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px;
  color: rgb(240, 240, 240);
  display: flex;
  gap: 10px;
  width: 100%;
  height: 70px;
  justify-content: left;
  align-items: center;
  z-index: 1;
`;

export const UserPhotoDefault = styled.img`
  position: absolute;
  left: 20px;
  top: 10px;
  width: 50px;
  border-radius: 50px;
  cursor: pointer;
`;

export const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  margin: 13px 10px 10px 10px;
  border-radius: 50px;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 18px;
  text-align: left;
`;

export const MenuLi = styled.li`
  float: left;
  cursor: pointer;
`;

export const MenuDropDownContent = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
  position: absolute;
  left: 0;
  top: 70px;
  min-width: 145px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const MenuDropDownLi = styled(MenuLi)`
  display: inline-block;
  flex-direction: row;
  padding: 3px;

  &:hover ${MenuDropDownContent} {
    display: block;
  }
`;

export const MenuSubA = styled.a`
  width: auto;
  color: rgb(240, 240, 240);
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-radius: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 370px) {
    font-size: 15px;
  }
`;

export const MenuButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
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

export const NoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  @media (max-width: 600px) {
    height: auto;
  }
`;
