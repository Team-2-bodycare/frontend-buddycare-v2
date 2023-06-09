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
} from "../signIn/styleSignIn";
import swal from "sweetalert";
import home from "../../assets/img/home.png";
import signin from "../../assets/img/signin.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ISignIn } from "../../interfaces/ISignIn";
import { signInService } from "../../services/authentication/SignInAuth";
import { Loading } from "../../components/loading/Loading";

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
    const type = response.data.user.isPsychologist;
    const userId = response.data.user.id;

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("type", type);
      localStorage.setItem("userId", userId);

      setLoading(1);

      if (type === true) {
        setTimeout(() => {
          navigate("/psychologist-profile");
        }, 1500);
      } else {
        setTimeout(() => {
          navigate("/patient-Profile");
        }, 1500);
      }
    }
  };

  let [loadind, setLoading] = useState(0);

  const loadingShow = () => {
    setLoading(1);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  console.log(loadind);
  return (
    <SignInContainer>
      {loadind === 1 ? <Loading /> : <></>}

      <SignInImgHome
        title="Voltar ao início"
        src={home}
        onClick={loadingShow}
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
