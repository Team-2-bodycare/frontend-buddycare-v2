import {
  SignUpAccount,
  SignUpButton,
  SignUpContainer,
  SignUpForm,
  SignUpFormGroup,
  SignUpInput,
  SignUpLogo,
  SignUpSpanEmail,
  SignUpSpanName,
  SignUpSpanPhone,
  SignUpSpanPassword,
  SignUpTitle,
} from "../signUp/styleSignUp";
import signup from "../../assets/img/signup.png";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate(); 

  return (
    <SignUpContainer>
      <SignUpForm>
        <SignUpLogo src={signup} />
        <SignUpTitle>Criar conta no Buddy Care</SignUpTitle>
        <SignUpFormGroup>
          <SignUpInput autoComplete="off" type="text" name="name" required />
          <SignUpSpanName>Nome</SignUpSpanName>
        </SignUpFormGroup>
        <SignUpFormGroup>
          <SignUpInput autoComplete="off" type="text" name="email" required />
          <SignUpSpanEmail>Email</SignUpSpanEmail>
        </SignUpFormGroup>
        <SignUpFormGroup>
          <SignUpInput autoComplete="off" type="text" name="email" required />
          <SignUpSpanPhone>Telefone</SignUpSpanPhone>
        </SignUpFormGroup>
        <SignUpFormGroup>
        <SignUpInput autoComplete="off" type="password" name="password" required />
        <SignUpSpanPassword>Senha</SignUpSpanPassword>
        </SignUpFormGroup>
        <SignUpButton>Salvar</SignUpButton>
        <SignUpAccount onClick={() => navigate("/signin")} >Já tem uma conta? Entre aqui!</SignUpAccount>
        
      </SignUpForm>
    </SignUpContainer>
  );
}
