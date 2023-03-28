import { Api } from "../api/Api";
import swal from "sweetalert";
import { INote } from "../../interfaces/INote";

export const NoteService = {
  Create: async (values: INote) => {
    try {
      const res = await Api.post("/note", values);
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
};