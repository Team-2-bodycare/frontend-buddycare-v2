import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListPsychologist } from "../../components/listPsychologist/listPsychologist";
import { MenuPatient } from "../../components/menuPatient/MenuPatient";
import { Payment } from "../../components/payment/Payment";
import { IPatient } from "../../interfaces/IPatient";
import { getByIdPatient } from "../../services/patient/ByIdPatient";
import { removePatientPsychologist } from "../../services/patientPsychologist/RemovePatientPsychologist";
import {
  PatientContainer,
  PPButton,
  PPContainer,
  PPName,
  PPPhoto,
  PPPsychologistContainer,
} from "./stylePatientProfile";

export function PatientProfile() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [patient, setPatient] = useState<IPatient>();

  useEffect(() => {
    patientById();
  }, []);

  async function patientById() {
    const response = await getByIdPatient(`${userId}`);
    setPatient(response.data);
  }

  async function deletePatientPsychologist() {
    await removePatientPsychologist(`${userId}`);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  return (
    <PatientContainer>
      <MenuPatient />
      {patient?.psychologist === null ? (
        <ListPsychologist />
      ) : (
        <PPContainer>
          <PPPsychologistContainer>
            <PPPhoto src={patient?.psychologist.psychologist.user.photo} />
            <PPName>{patient?.psychologist.psychologist.user.name}</PPName>
            <PPButton onClick={() => deletePatientPsychologist()}>
              Cancelar Contrato
            </PPButton>
          </PPPsychologistContainer>
          <Payment />
        </PPContainer>
      )}
    </PatientContainer>
  );
}
