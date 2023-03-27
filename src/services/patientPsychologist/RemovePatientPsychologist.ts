import { Api } from "../api/Api";

export const removePatientPsychologist = async (id: string) => {
  const response = await Api.delete(`/pp/${id}`);
  return response;
};
