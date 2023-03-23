import { SignUp } from "../../../components/signUp/SignUp";
import { RegisterContainer } from "./styleRegisterPsychologist";

export function RegisterPsychologist() {
  return (
    <RegisterContainer>
      <SignUp typeUser={true} />
    </RegisterContainer>
  );
}
