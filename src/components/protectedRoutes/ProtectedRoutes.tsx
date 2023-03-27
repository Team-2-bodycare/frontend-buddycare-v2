import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/isAuthenticated/IsAuthenticated";
import swal from "sweetalert";

export const ProtectedRoutes = (props: any) => {
  const logged = isAuthenticated();

  if (!logged) {
    swal({
      title: "Erro de autenticação!",
      text: "Entre com suas credenciais para acessar essa página!",
      icon: "error",
      timer: 5000,
    });
  }

  return logged ? <Outlet /> : <Navigate to="/" />;
};
