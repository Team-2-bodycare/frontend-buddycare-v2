import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading/Loading";
import {
  MenuA,
  MenuContainer,
  MenuDropbtn,
  MenuDropDownContent,
  MenuDropDownLi,
  MenuLi,
  MenuSubA,
  MenuUl,
} from "./styleMenu";

export function Menu() {
  const navigate = useNavigate();

  let [loadind, setLoading] = useState(0);

  const loadingShow = (props: string) => {
    setLoading(1);
    setTimeout(() => {
      navigate(props);
    }, 3000);
  };

  return (
    <MenuContainer>
      {loadind === 1 ? <Loading /> : <></>}
      <MenuUl>
        <MenuDropDownLi>
          <MenuDropbtn>Psicólogo</MenuDropbtn>
          <MenuDropDownContent>
            <MenuSubA onClick={() => loadingShow("/signin")}>
              Entrar
            </MenuSubA>
            <MenuSubA
              onClick={() => loadingShow("/signup-psychologist")}
            >
              Registrar-se
            </MenuSubA>
          </MenuDropDownContent>
        </MenuDropDownLi>
        <MenuDropDownLi>
          <MenuDropbtn>Paciente</MenuDropbtn>
          <MenuDropDownContent>
            <MenuSubA onClick={() => navigate("/signin")}>Entrar</MenuSubA>
            <MenuSubA onClick={() => navigate("/signup-patient")}>
              Registrar-se
            </MenuSubA>
          </MenuDropDownContent>
        </MenuDropDownLi>
      </MenuUl>
    </MenuContainer>
  );
}
