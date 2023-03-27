import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Body, Div1, Div2, Div3 } from "./stylePsychologistProfile";
import { useNavigate } from "react-router-dom";

interface PsychologistData {
  id: string;
  name: string;
  photo: string;
  worker: {
    crp: string;
    specialization: string;
    summary: string;
  };
}

export function PsychologistProfile() {
  const [psychologistData, setPsychologistData] = useState<PsychologistData>();

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear(); // limpa o localStorage
    localStorage.removeItem("user"); // Remove o usuário do localStorage
    localStorage.removeItem("token"); // Remove o token do localStorage
    navigate("/home"); // Redireciona o usuário para a página /home
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     try {
  //       const decodedToken: any = jwt_decode(token);
  //       const userId = decodedToken.userId;

  //       fetch(`/api/psychologist/${userId}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Erro ao buscar dados do psicólogo");
  //           }
  //           return response.json();
  //         })
  //         .then((data) => {
  //           setPsychologistData(data);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //           navigate("/home");
  //         });
  //     } catch (error) {
  //       console.error(error);
  //       navigate("/home");
  //     }
  //   } else {
  //     navigate("/home");
  //   }
  // }, []);


  return (
    <>
      <Body>
        <Div1>
          <h1>div 1</h1>
        </Div1>

        <Div2>
          {psychologistData ? (
            <>
              <h2>{psychologistData.name}</h2>
              <p>{psychologistData.worker.crp}</p>
              <p>{psychologistData.worker.specialization}</p>
              <p>{psychologistData.worker.summary}</p>
            </>
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
