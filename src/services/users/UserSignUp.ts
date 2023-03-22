import { Api } from "../api/Api";
import swal from "sweetalert";
import { ISignUp } from "../../interfaces/ISignUp";

export const SignUpService = {
  Register: async (values: ISignUp) => {
    try {
      const res = await Api.post("/user", values);
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
