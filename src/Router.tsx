import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./pages/signIn/SignIn";
import { SignUp } from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<>Admin</>} />
        <Route path="/patient" element={<>Patient</>} />
      </Routes>
    </>
  );
}
