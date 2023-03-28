import {
  MenuContainer,
  MenuDropDownContent,
  MenuDropDownLi,
  MenuSubA,
  UserName,
  UserPhoto,
} from "./styleMenuUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPatient } from "../../interfaces/IPatient";
import { getByIdPatient } from "../../services/patient/ByIdPatient";
import { getByIdPsychologist } from "../../services/psychologist/ByIdPsychologist";

export function MenuPatient() {
  const [psychologist, setPsychologist] = useState<IPatient>();
  useEffect(() => {
    psychologistById();

    setInterval(() => {
      psychologistById();
    }, 10000);
  }, []);

  async function psychologistById() {
    const response = await getByIdPsychologist(`${userId}`);
    setPsychologist(response.data);
  }

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [patient, setPatient] = useState<IPatient>();
  useEffect(() => {
    patientById();

    setInterval(() => {
      patientById();
    }, 10000);
  }, []);

  async function patientById() {
    const response = await getByIdPatient(`${userId}`);
    setPatient(response.data);
  }

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    localStorage.removeItem("type");
    navigate("/");
  };

  return (
    <MenuContainer>
      <MenuDropDownLi>
        <UserPhoto src={patient?.photo} />
        <MenuDropDownContent>
          <MenuSubA onClick={() => navigate("/signin")}>Editar Perfil</MenuSubA>
          <MenuSubA onClick={() => navigate("/signin")}>Meu psicólogo</MenuSubA>
          <MenuSubA onClick={() => navigate("/signin")}>Chat</MenuSubA>
          <MenuSubA onClick={() => logout()}>Sair</MenuSubA>
        </MenuDropDownContent>
      </MenuDropDownLi>
      {patient?.isPsychologist === false ? (
        <UserName>Olá, {patient?.name}</UserName>
      ) : (
        <UserName>Olá, {psychologist?.name}</UserName>
      )}
    </MenuContainer>
  );
}
