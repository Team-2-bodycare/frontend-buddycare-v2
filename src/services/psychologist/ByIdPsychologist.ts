import { Api } from "../api/Api";

export const getByIdPsychologist = async (id: string) => {
  const response = await Api.get(`/user/${id}`);
  return response;
};
