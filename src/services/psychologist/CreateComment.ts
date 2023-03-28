import { Api } from "../api/Api";
import swal from "sweetalert";
import { IComment } from "../../interfaces/IComment";

export const CommentService = {
  Create: async (id: string ,values: IComment) => {
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
};