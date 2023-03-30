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
import { UserUpdate } from "../../components/userUpdate/UserUpdate";
import { Loading } from "../../components/loading/Loading";

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

    setLoading(1);

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

  let [showUpdate, setShowUpdate] = useState(0);

  let [showNote, setShowNote] = useState(0);

  let [showPayment, setShowPayment] = useState(0);

  let [loadind, setLoading] = useState(0);

  const loadingShow = () => {
    setLoading(1);
    setTimeout(() => {
      logout();
    }, 3000);
  };

  return (
    <PatientContainer>
      {loadind === 1 ? <Loading /> : <></>}
      <MenuContainer>
        <MenuDropDownLi>
          <UserPhoto src={patient?.photo} />
          <MenuDropDownContent>
            <MenuSubA onClick={() => setShowUpdate((showUpdate = 1))}>
              Editar Perfil
            </MenuSubA>
            <MenuSubA onClick={() => setShowPayment(1)}>Pagar sessão</MenuSubA>
            <MenuSubA onClick={() => deletePatientPsychologist()}>
              Encerrar contrato
            </MenuSubA>
            <MenuSubA onClick={loadingShow}>Sair</MenuSubA>
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
              {showPayment === 1 ? (
                <Payment />
              ) : (
                <>
                  <PPPhoto
                    src={patient?.psychologist.psychologist.user.photo}
                  />
                  <PPName>
                    {patient?.psychologist.psychologist.user.name}
                  </PPName>
                  {showNote === 0 ? (
                    <PPButton onClick={() => setShowNote((showNote = 1))}>
                      Enviar nota
                    </PPButton>
                  ) : (
                    <PPButton onClick={() => setShowNote((showNote = 0))}>
                      Fechar notas
                    </PPButton>
                  )}
                </>
              )}
            </PPPsychologistContainer>
            <PatientOptions>
              {showUpdate === 1 ? (
                <>
                  <UserUpdate />
                  <MenuButton onClick={() => setShowUpdate((showUpdate = 0))}>
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
        </PPContainer>
      )}
    </PatientContainer>
  );
}
