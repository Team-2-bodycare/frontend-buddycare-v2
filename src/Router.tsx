import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import Home from "./pages/home/Home";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<>Admin</>} />
        <Route path="/patient" element={<>Patient</>} />
      </Routes>
    </>
  );
}
