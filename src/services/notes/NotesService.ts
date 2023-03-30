import { Api } from "../api/Api";
import swal from "sweetalert";
import { INote } from "../../interfaces/INote";
import { IComment } from "../../interfaces/IComment";

export const notesService = {
  Create: async (id: string, values: IComment) => {
    try {
      const res = await Api.patch(`/note/${id}`, values);
      return res;
    } catch (error: any) {
      swal({
        title: "Error",
        text: `${error.message}`,
        icon: "error",
        timer: 5000,
      });
    }
  },
  GetById: async (id: string) => {
    try {
      const response = await Api.get(`/note/${id}`);

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
  UpdateById: async (id: string, data: INote) => {
    try {
      const response = await Api.patch(`/note/${id}`, data);

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
