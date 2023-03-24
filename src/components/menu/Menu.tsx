import { useNavigate } from "react-router-dom";
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

  return (
    <MenuContainer>
      <MenuUl>
        <MenuDropDownLi>
          <MenuDropbtn>Psicólogo</MenuDropbtn>
          <MenuDropDownContent>
            <MenuSubA onClick={() => navigate("/signin")} >Entrar</MenuSubA>
            <MenuSubA onClick={() => navigate("signup-psychologist")} >Registrar-se</MenuSubA>
          </MenuDropDownContent>
        </MenuDropDownLi>
        <MenuDropDownLi>
          <MenuDropbtn>Paciente</MenuDropbtn>
          <MenuDropDownContent>
            <MenuSubA onClick={() => navigate("/signin")} >Entrar</MenuSubA>
            <MenuSubA onClick={() => navigate("/signup-patient")} >Registrar-se</MenuSubA>
          </MenuDropDownContent>
        </MenuDropDownLi>
      </MenuUl>
    </MenuContainer>
  );
}
