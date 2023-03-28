import { useEffect, useState } from "react";
import { Body, Div1, Div2, Div3 } from "./stylePsychologistProfile";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces/IPsychologistsProfile";
import { getByIdUser } from "../../services/users/GetByIdUser";
import { MenuUser } from "../../components/menuUser/MenuUser";

export function PsychologistProfile() {
  const [userData, setUserData] = useState<IUser>();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate()

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

  const handleLogout = () => {
    localStorage.clear(); // limpa o localStorage
    navigate("/home"); // Redireciona o usuário para a página /home
  };

  return (
    <>
      <MenuUser />
      <Body>
        <Div1>
          <h1>div 1</h1>
        </Div1>

        <Div2>
          {userData ? (
            <>
              <h2>{userData.name}</h2>
              <p>{userData.worker.crp}</p>
              <p>{userData.worker.specialization}</p>
              <p>{userData.worker.summary}</p>
            </>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <p>Carregando dados do psicólogo...</p>
          )}

          <button onClick={handleLogout}>Logout</button>

        </Div2>

        <Div3>
          <h1>div 3</h1>
        </Div3>
      </Body>
    </>
  );
}
