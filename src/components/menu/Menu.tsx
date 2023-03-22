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
          <MenuDropbtn>Área do Psicólogo</MenuDropbtn>
          <MenuDropDownContent>
            <MenuSubA onClick={() => navigate("/signin")} >Entrar</MenuSubA>
            <MenuSubA onClick={() => navigate("/signup")} >Registrar-se</MenuSubA>
          </MenuDropDownContent>
        </MenuDropDownLi>

        <MenuLi>
          <MenuA>Contato</MenuA>
        </MenuLi>
        <MenuLi>
          <MenuA>Sobre</MenuA>
        </MenuLi>
      </MenuUl>
    </MenuContainer>
  );
}
