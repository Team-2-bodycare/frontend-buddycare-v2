import {
  SignInAccount,
  SignInButton,
  SignInContainer,
  SignInForm,
  SignInFormGroup,
  SignInInput,
  SignInLogo,
  SignInSpanEmail,
  SignInSpanPassword,
  SignInTitle,
} from "./styleSignIn";
import signin from "../../assets/img/signin.png";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate(); 

  return (
    <SignInContainer>
      <SignInForm>
        <SignInLogo src={signin} />
        <SignInTitle>Acesse o Buddy Care</SignInTitle>
        <SignInFormGroup>
          <SignInInput autoComplete="off" type="text" name="email" required />
          <SignInSpanEmail>Email</SignInSpanEmail>
        </SignInFormGroup>
        <SignInFormGroup>
        <SignInInput autoComplete="off" type="password" name="password" required />
        <SignInSpanPassword>Senha</SignInSpanPassword>
        </SignInFormGroup>
        <SignInButton>Entrar</SignInButton>
        <SignInAccount onClick={() => navigate("/signup")} >Não tem uma conta? Inscreva-se!</SignInAccount>
        
      </SignInForm>
    </SignInContainer>
  );
}
