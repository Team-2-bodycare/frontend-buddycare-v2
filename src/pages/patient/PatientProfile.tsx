import {
  MenuButton,
  MenuContainer,
  MenuDropDownContent,
  MenuDropDownLi,
  MenuSubA,
  NoteContainer,
  PatientContainer,
  PatientNotePsychologistContainer,
  PatientOptions,
  PPButton,
  PPContainer,
  PPName,
  PPPhoto,
  PPPsychologistContainer,
  UserName,
  UserPhoto,
} from "./stylePatientProfile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListPsychologist } from "../../components/listPsychologist/listPsychologist";
import { Payment } from "../../components/payment/Payment";
import { IPatient } from "../../interfaces/IPatient";
import { getByIdPatient } from "../../services/patient/ByIdPatient";
import { removePatientPsychologist } from "../../services/patientPsychologist/RemovePatientPsychologist";
import { Note } from "../../components/note/Note";
import { MenuUser } from "../../components/menuUser/MenuUser";
import { UserUpdate } from "../../components/userUpdate/UserUpdate";

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

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    localStorage.removeItem("type");
    navigate("/");
  };

  let [show, setShow] = useState(0);
  let [showNote, setShowNote] = useState(0);

  return (
    <PatientContainer>
      <MenuContainer>
        <MenuDropDownLi>
          <UserPhoto src={patient?.photo} />
          <MenuDropDownContent>
            <MenuSubA onClick={() => setShow((show = 1))}>
              Editar Perfil
            </MenuSubA>
            <MenuSubA onClick={() => logout()}>Sair</MenuSubA>
            <MenuSubA onClick={() => deletePatientPsychologist()}>
              Encerrar contrato
            </MenuSubA>
          </MenuDropDownContent>
        </MenuDropDownLi>
        {patient?.isPsychologist === false ? (
          <UserName>Olá, {patient?.name}</UserName>
        ) : (
          <p></p>
          // <UserName>Olá, {psychologist?.name}</UserName>
        )}
      </MenuContainer>
      {patient?.psychologist === null ? (
        <ListPsychologist />
      ) : (
        <PPContainer>
          <PatientNotePsychologistContainer>
            <PPPsychologistContainer>
              <PPPhoto src={patient?.psychologist.psychologist.user.photo} />
              <PPName>{patient?.psychologist.psychologist.user.name}</PPName>
              {showNote === 0 ? (
                <PPButton onClick={() => setShowNote((showNote = 1))}>
                  Enviar nota
                </PPButton>
              ) : (
                <PPButton onClick={() => setShowNote((showNote = 0))}>
                  Fechar notas
                </PPButton>
              )}
            </PPPsychologistContainer>
            <PatientOptions>
              {show === 1 ? (
                <>
                  <UserUpdate />
                  <MenuButton onClick={() => setShow((show = 0))}>
                    Cancelar
                  </MenuButton>
                </>
              ) : (
                <>
                  <img
                    onClick={() => {}}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      marginBottom: "10px",
                    }}
                    src="https://palestraparaprofessores.com.br/wp-content/webp-express/webp-images/uploads/2022/07/frases-motivacionais-depressao-winderson-nunes.jpg.webp"
                  />
                  <img
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      marginBottom: "10px",
                    }}
                    src="https://palestraparaprofessores.com.br/wp-content/webp-express/webp-images/uploads/2022/07/Tenha-um-bom-dia-com-flores-story-do-instagram-Post-para-Facebook-compressed.jpg.webp"
                  />
                  <img
                    style={{ width: "100%", borderRadius: "10px" }}
                    src="https://palestraparaprofessores.com.br/wp-content/webp-express/webp-images/uploads/2022/07/mais-esperanca-nos-meus-passos-do-que-tristeza-nos-meus-ombros.jpg.webp"
                  />
                </>
              )}
            </PatientOptions>
          </PatientNotePsychologistContainer>
          {showNote === 1 ? (
            <Note />
          ) : (
            <NoteContainer>
              <img
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://palestraparaprofessores.com.br/wp-content/webp-express/webp-images/uploads/2022/07/frases-motivacionais-depressao-jim-carrey.jpg.webp"
              />
            </NoteContainer>
          )}

          {/* <Payment /> */}
        </PPContainer>
      )}
    </PatientContainer>
  );
}
