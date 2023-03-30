import { useEffect, useState } from "react";
import { Body, Div1, Div2, Div3 } from "./stylePsychologistProfile";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../../interfaces/IPsychologistsProfile";
import { getByIdUser } from "../../services/users/GetByIdUser";
import { updatePsychologist } from "../../services/psychologist/GetByIdPsychologist";
import { IPsychologistsProfile } from "../../interfaces/IPsychologistsProfile";
import { PsychologistProfileModal } from "../../components/modal/PsychologistProfileModal";
import { MenuUser } from "../../components/menuUser/MenuUser";
import { CommentNote } from "../../components/comment/CommentNote";

export function PsychologistProfile() {
  const { id } = useParams<{ id?: string }>();
  const parsedId = id ?? ""; // define um valor padrão de string vazia caso id seja undefined

  // const [psychologist, setPsychologist] = useState<IPsychologistsProfile>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userData, setUserData] = useState<IUser>();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

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
    }
  }, []);

  const handleUpdatePsychologist = async (data: Partial<IPsychologistsProfile>) => {
    try {
      const response = await updatePsychologist(parsedId, data);
      const updatedPsychologist = response.data;
      setIsModalOpen(false);
      // setPsychologist(updatedPsychologist);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MenuUser />
      <Body>
        <Div1>
          <CommentNote />
          <h1>div 1</h1>
        </Div1>

        <Div2>
          {userData ? (
            <>
              <img src={userData.photo} style={{ width: "150px" }} alt="avatar" />
              <h2>Olá, Dr.{userData.name}</h2>
              <p>Contato: {userData.phone}</p>
              <p>CRP: {userData.worker?.crp}</p>
              <p>Especialização: {userData.worker?.specialization || 'Não informado'}</p>
              {userData.worker?.summary && (
                <>
                  <p>Resumo: </p>
                  <p>{userData.worker?.summary}</p>
                </>
              )}
              <button onClick={() => setIsModalOpen(true)}>Editar</button>

              <PsychologistProfileModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} onSubmit={handleUpdatePsychologist} />
            </>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <p>Carregando dados do psicólogo...</p>
          )}

        </Div2>

        <Div3>
          <h1>div 3</h1>
        </Div3>
      </Body>
    </>
  );
}
