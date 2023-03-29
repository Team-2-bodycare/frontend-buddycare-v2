import { Api } from "../api/Api";
import swal from "sweetalert";
import { IUser } from "../../interfaces/IPsychologistsProfile";

export const userService = {
  GetById: async (id: string) => {
    try {
      const response = await Api.get(`/user/${id}`);

      return response;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 6000,
      });
    }
  },
  UpdateById: async (id: string, data: IUser) => {
    try {
      const response = await Api.patch(`user/${id}`, data);

      return response;
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
