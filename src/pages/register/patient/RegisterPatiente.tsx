import { SignUp } from "../../../components/signUp/SignUp";
import { RegisterContainer } from "./styleRegisterPatient";

export function RegisterPatient() {
  return (
    <RegisterContainer>
      <SignUp typeUser={false} />
    </RegisterContainer>
  );
}
