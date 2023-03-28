import { Api } from "../api/Api";

export const getAllNotesComments = async () => {
  const response = await Api.get("/note");
  return response;
};