import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/home/Home";

//#criar privateRoute

export function Router() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/admin" element={<>Admin</>} />
        <Route path="/patient" element={<>Patient</>} />
      </Routes>
    </>
  );
}
