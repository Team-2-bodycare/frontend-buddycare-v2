import { Api } from "../api/Api";

export const getByIdPatient = async (id: string) => {
  const response = await Api.get(`/user/${id}`);
  return response;
};
