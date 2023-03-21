import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

//#criar privateRoute

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/admin" element={<>Admin</>} />
        <Route path="/patient" element={<>Patient</>} />
      </Routes>
    </>
  );
}
