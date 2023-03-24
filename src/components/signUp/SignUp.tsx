import {
  SignUpAccount,
  SignUpButton,
  SignUpForm,
  SignUpFormGroup,
  SignUpInput,
  SignUpLogo,
  SignUpSpanEmail,
  SignUpSpanName,
  SignUpSpanPhone,
  SignUpSpanPassword,
  SignUpTitle,
  SignUpImgHome,
  SignUpContainer,
} from "./styleSignUp";
import swal from "sweetalert";
import home from "../../assets/img/home.png";
import signup from "../../assets/img/signup.png";
import { useNavigate } from "react-router-dom";
import { ISignUp } from "../../interfaces/ISignUp";
import { useState } from "react";
import { SignUpService } from "../../services/users/UserSignUp"
import { ITypeUser } from "../../interfaces/ITypeUser";

export function SignUp(props: ITypeUser) {
  const navigate = useNavigate();

  const [values, setValues] = useState<ISignUp>({
    name: "",
    email: "",
    phone: "",
    photo: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
    password: "",
    isPsychologist: props.typeUser,
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: ISignUp) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegisterUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await SignUpService.Register(values);

    if (!response) {
      swal({
        title: "Erro de Cadastro",
        text: "Informações incorretas!",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;

    if (!jwt) {
      swal({
        title: "Error!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 6000,
      });
    }

    if (values.isPsychologist === true) {
      localStorage.setItem("jwt", jwt);
      swal({
        title: "Psicólogo cadastrado com sucesso!",
        icon: "success",
        timer: 6000,
      });
      navigate("/signin");
    } else {
      localStorage.setItem("jwt", jwt);
      swal({
        title: "Paciente cadastrado com sucesso!",
        icon: "success",
        timer: 6000,
      });
      navigate("/signin");
    }
  };

  return (
    <SignUpContainer>
      <SignUpImgHome
        title="Voltar ao início"
        src={home}
        onClick={() => navigate("/")}
      />
      <SignUpForm onSubmit={handleRegisterUser}>
        <SignUpLogo src={signup} />
        <SignUpTitle>Criar conta no Buddy Care</SignUpTitle>
        <SignUpFormGroup>
          <SignUpInput
            autoComplete="off"
            type="text"
            name="name"
            required
            onChange={handleChangesValues}
          />
          <SignUpSpanName>Nome</SignUpSpanName>
        </SignUpFormGroup>
        <SignUpFormGroup>
          <SignUpInput
            autoComplete="off"
            type="text"
            name="email"
            required
            onChange={handleChangesValues}
          />
          <SignUpSpanEmail>Email</SignUpSpanEmail>
        </SignUpFormGroup>
        <SignUpFormGroup>
          <SignUpInput
            autoComplete="off"
            type="text"
            name="phone"
            required
            onChange={handleChangesValues}
          />
          <SignUpSpanPhone>Telefone</SignUpSpanPhone>
        </SignUpFormGroup>
        <SignUpFormGroup>
          <SignUpInput
            autoComplete="off"
            type="password"
            name="password"
            required
            onChange={handleChangesValues}
          />
          <SignUpSpanPassword>Senha</SignUpSpanPassword>
        </SignUpFormGroup>
        <SignUpInput
          type="hidden"
          name="isPsychologist"
          required
          onChange={handleChangesValues}
        />
        <SignUpInput
          type="hidden"
          name="photo"
          required
          onChange={handleChangesValues}
        />
        <SignUpButton>Salvar</SignUpButton>
        <SignUpAccount onClick={() => navigate("/signin")}>
          Já tem uma conta? Entre aqui!
        </SignUpAccount>
      </SignUpForm>
    </SignUpContainer>
  );
}
