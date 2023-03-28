import {
  PatientContainer,
  PatientNotePsychologistContainer,
  PatientOptions,
  PPButton,
  PPContainer,
  PPName,
  PPPhoto,
  PPPsychologistContainer,
} from "./stylePatientProfile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListPsychologist } from "../../components/listPsychologist/listPsychologist";
import { MenuPatient } from "../../components/menuUser/MenuUser";
import { Payment } from "../../components/payment/Payment";
import { IPatient } from "../../interfaces/IPatient";
import { getByIdPatient } from "../../services/patient/ByIdPatient";
import { removePatientPsychologist } from "../../services/patientPsychologist/RemovePatientPsychologist";
import { Note } from "../../components/note/Note";

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
          <PatientNotePsychologistContainer>
            <PPPsychologistContainer>
              <PPPhoto src={patient?.psychologist.psychologist.user.photo} />
              <PPName>{patient?.psychologist.psychologist.user.name}</PPName>
              <PPButton onClick={() => deletePatientPsychologist()}>
                Cancelar Contrato
              </PPButton>
            </PPPsychologistContainer>
            <PatientOptions>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </PatientOptions>
          </PatientNotePsychologistContainer>
          <Note />
          {/* <Payment /> */}
        </PPContainer>
      )}
    </PatientContainer>
  );
}
