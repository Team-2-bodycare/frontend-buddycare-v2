import {
  SignInAccount,
  SignInButton,
  SignInContainer,
  SignInForm,
  SignInFormGroup,
  SignInImgHome,
  SignInInput,
  SignInLogo,
  SignInSpanEmail,
  SignInSpanPassword,
  SignInTitle,
} from "./styleSignIn";
import swal from "sweetalert";
import home from "../../assets/img/home.png";
import signin from "../../assets/img/signin.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ISignIn } from "../../interfaces/ISignIn";
import { signInService } from "../../services/authentication/SignInAuth";

export function SignIn() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    isPsychologist: true,
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: ISignIn) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await signInService.Login(values);

    if (!response) {
      swal({
        title: "Erro de login",
        text: "Usuário e/ou senha inválidos",
        icon: "error",
        timer: 5000,
      });
    }

    const jwt = response.data.token;
    const type = response.data.isPsychologist;

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("type", type);

      swal({
        title: "Bem vindo ao Buddy Care",
        icon: "success",
        timer: 4000,
      });

      if (values.isPsychologist === true) {
        navigate("/psychologist-profile");
      } else {
        navigate("/patient-Profile");
      }
    }
  };

  return (
    <SignInContainer>
      <SignInImgHome
        title="Voltar ao início"
        src={home}
        onClick={() => navigate("/")}
      />
      <SignInForm onSubmit={handleSignin}>
        <SignInLogo src={signin} />
        <SignInTitle>Acesse o Buddy Care</SignInTitle>
        <SignInFormGroup>
          <SignInInput
            autoComplete="off"
            type="text"
            name="email"
            required
            onChange={handleChangesValues}
          />
          <SignInSpanEmail>Email</SignInSpanEmail>
        </SignInFormGroup>
        <SignInFormGroup>
          <SignInInput
            autoComplete="off"
            type="password"
            name="password"
            required
            onChange={handleChangesValues}
          />
          <SignInSpanPassword>Senha</SignInSpanPassword>
        </SignInFormGroup>
        <SignInButton>Entrar</SignInButton>
        <SignInAccount onClick={() => navigate("/signup")}>
          Não tem uma conta? Inscreva-se!
        </SignInAccount>
      </SignInForm>
    </SignInContainer>
  );
}
