import { Api } from "../api/Api";
import swal from "sweetalert";
import { ISignIn } from "../../interfaces/ISignIn";

export const signinService = {
  Login: async (values: ISignIn) => {
    try {
      const res = await Api.post("/auth/login", values);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
};
