import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "../src/pages/signIn/SignIn";
import { SignUp } from "./components/signUp/SignUp";
import Home from "./pages/home/Home";
import { PsychologistProfile } from "./pages/PsychologistProfile/PsychologistProfile";
import { PatientProfile } from "./pages/patient/PatientProfile";
import { ListPsychologist } from "./components/listPsychologist/listPsychologist";
import { Detalhe } from "./pages/patient/details/Details";
import { ProtectedRoutes } from "./components/protectedRoutes/ProtectedRoutes";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup-psychologist" element={<SignUp typeUser={true} />} />
      <Route path="/signup-patient" element={<SignUp typeUser={false} />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/psychologist-profile" element={<PsychologistProfile />} />
        <Route path="/list-psychologist" element={<ListPsychologist />} />
        <Route path="/detalhe/:id" element={<Detalhe />} />
      </Route>
    </Routes>
  );
}
