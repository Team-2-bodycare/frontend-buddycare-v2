import { useState, useRef, useEffect, SetStateAction } from "react";
import {
  Body,
  Div1,
  Div2,
  Div3,
  StyleButton,
  SubDiv1,
  SubDiv2,
  StyleMenu,
  ListPacient,
  MenuSubA,
  StyleLi,
  DivCard,
  MenuButton,
  DivCalendar,
  DivNotas,
} from "./stylePsychologistProfile";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../../interfaces/IPsychologistsProfile";
import { getByIdUser } from "../../services/users/GetByIdUser";
import { updatePsychologist } from "../../services/psychologist/GetByIdPsychologist";
import { IPsychologistsProfile } from "../../interfaces/IPsychologistsProfile";
import { PsychologistProfileModal } from "../../components/modal/PsychologistProfileModal";
import { CommentNote } from "../../components/comment/CommentNote";
import PatientModal from "../../components/modal/PatientModal";
import { BsPersonFillGear, BsSearch } from "react-icons/bs";
import { StyleInput } from "../../components/modal/style/StyleModalPsychologist";
import config from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";
import { IComments } from "../../interfaces/IComments";

export interface IPatient {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  progress: [];
  note: [];
}

export function PsychologistProfile() {
  const { id } = useParams<{ id?: string }>();
  const parsedId = id ?? "";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userData, setUserData] = useState<IComments>();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const fetchData = async () => {
        try {
          const response = await getByIdUser(userId);
          setUserData(response.data);
        } catch (error) {
          setError("Erro ao buscar os dados do usuário.");
        }
      };
      fetchData();

      setInterval(() => {
        fetchData();
      }, 5000);
    }
  }, []);

  const handleUpdatePsychologist = async (
    data: Partial<IPsychologistsProfile>
  ) => {
    try {
      const response = await updatePsychologist(parsedId, data);
      const updatedPsychologist = response.data;
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [showButton, setShowButton] = useState(false);
  const [showFullSummary, setShowFullSummary] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  const handleShowMore = () => {
    setShowFullSummary(true);
  };

  useEffect(() => {
    const summary = userData?.worker?.summary;
    if (summary && summary.length > summaryPreviewMaxLength) {
      setShowButton(true);
    }
  }, [userData?.worker?.summary]);

  const summaryPreviewMaxLength = 100;
  const summaryPreview =
    userData?.worker?.summary?.slice(0, summaryPreviewMaxLength) +
    (showButton && !showFullSummary ? "..." : "");

  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<IUser | null>(null);

  function handleOpenModal(patient: IUser) {
    setSelectedPatient(patient);
    setShowModal(true);
  }

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = userData?.worker?.patient.filter((patient) => {
    return patient.user.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Body>
        <Div1>
          <StyleMenu>
            {userData ? (
              <>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    height: "100px",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "1px 1px 3px black",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src={userData.photo}
                    style={{ width: "50px" }}
                    alt="avatar"
                  />
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#000000",
                      textAlign: "center",
                    }}
                  >
                    Olá, {userData.name}
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    height: "100px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0 2px",
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    borderRadius: "5px",
                  }}
                >
                  <BsPersonFillGear
                    style={{
                      color: "#0077b3",
                      width: "100%",
                      height: "23px",
                      cursor: "pointer",
                    }}
                    onClick={() => setMenuOpen(!menuOpen)}
                  />
                  <div
                    style={{
                      width: "100%",
                      height: "50px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "15px",
                      padding: "0 3px",
                      gap: "2px",
                    }}
                  >
                    {menuOpen && <></> ? (
                      <>
                        <MenuButton>Configurações</MenuButton>
                        <MenuButton>Sair</MenuButton>
                      </>
                    ) : (
                      <img
                        src={logo}
                        alt=""
                        style={{
                          width: "100%",
                          background: "rgba(0, 0, 0, 0.6)",
                          borderRadius: "5px",
                          marginTop: "5px",
                        }}
                      />
                    )}
                  </div>
                </div>
              </>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <p>Carregando dados do psicólogo...</p>
            )}
          </StyleMenu>

          <ListPacient>
            <h2 style={{ padding: "10px" }}>Lista de Pacientes</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <BsSearch style={{ fontSize: "25px", marginRight: "10px" }} />
              <StyleInput
                type="text"
                placeholder="Pesquisar por nome"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
            </div>
            <DivCard>
              <div>
                {filteredPatients?.map((patient) => (
                  <StyleLi
                    key={patient.user.id}
                    onClick={() => handleOpenModal(patient.user)}
                  >
                    <img
                      style={{ width: "80px", borderRadius: "49%" }}
                      src={patient.user.photo}
                      alt="Avatar"
                    />
                    <h3>{patient.user.name}</h3>
                    <p>
                      <b>Email:</b> {patient.user.email}
                    </p>
                    <p>
                      <b>Telefone:</b> {patient.user.phone}
                    </p>
                  </StyleLi>
                ))}
              </div>
              {showModal && (
                <PatientModal
                  patient={selectedPatient}
                  onClose={() => setShowModal(false)}
                />
              )}
            </DivCard>
          </ListPacient>
        </Div1>

        <Div2>
          {userData ? (
            <SubDiv1>
              <img
                src={userData.photo}
                style={{ width: "120px" }}
                alt="avatar"
              />
              <p style={{ fontSize: "1.5rem", color: "#000000" }}>
                <b>Olá, Dr.{userData.name}</b>
              </p>
              <p style={{ marginTop: "10px" }}>
                <b>{userData.worker?.specialization || "Não informado"}</b>
              </p>
              <p>
                <b>CRP:</b> {userData.worker?.crp}
              </p>
              <p style={{ marginTop: "10px" }}>
                <b>Contato:</b> {userData.phone}
              </p>
              {userData.worker?.summary && (
                <>
                  <p style={{ marginTop: "10px" }}>
                    <b>Resumo:</b>
                  </p>
                  {showFullSummary ? (
                    <>
                      <p style={{ overflow: "auto" }}>
                        {userData.worker?.summary}
                      </p>
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "rgba(0, 0, 0, 0.0",
                          color: "red",
                          cursor: "pointer",
                        }}
                        onClick={() => setShowFullSummary(false)}
                      >
                        Fechar
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{summaryPreview}</p>
                      {showButton && (
                        <button
                          style={{
                            border: "none",
                            backgroundColor: "rgba(0, 0, 0, 0.0",
                            color: "blue",
                            cursor: "pointer",
                          }}
                          onClick={() => setShowFullSummary(true)}
                        >
                          Ver mais
                        </button>
                      )}
                    </>
                  )}
                </>
              )}
              <StyleButton onClick={() => setIsModalOpen(true)}>
                Editar
              </StyleButton>

              <PsychologistProfileModal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                onSubmit={handleUpdatePsychologist}
              />
            </SubDiv1>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <p>Carregando dados do psicólogo...</p>
          )}

          <SubDiv2>
            <h2>Notificações</h2>
            {userData?.worker?.patient.map((notes) =>
              notes.user.note.map((noteComment) => {
                return (
                  <div key={noteComment.id} style={{ color: "rgb(240, 240, 240)", fontWeight: "bold" }}>
                    {noteComment.comment === null ? (
                      <>
                        <p>{noteComment.createdAt.toString()}</p>
                        <p>{noteComment.note}</p>
                      </>
                    ) : (
                      <p></p>
                    )}
                  </div>
                );
              })
            )}
          </SubDiv2>
        </Div2>

        <Div3>
          <DivCalendar>
            <h1>Calendário</h1>
          </DivCalendar>

          <DivNotas>
            <h1>
              Anotações
            </h1>
          </DivNotas>

        </Div3>
      </Body>
    </>
  );
}
