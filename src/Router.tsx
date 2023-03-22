import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./pages/signIn/SignIn";
import { SignUp } from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import { PsychologistProfile } from "./pages/PsychologistProfile/PsychologistProfile";
import { PatientProfile } from "./pages/patient/PatientProfile";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/psychologist-profile" element={<PsychologistProfile />} />
      </Routes>
    </>
  );
}
