import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/isAuthenticated/IsAuthenticated";

export const ProtectedRoutes = (props: any) => {
  const logged = isAuthenticated();

  return logged ? <Outlet /> : <Navigate to="/" />;
};
