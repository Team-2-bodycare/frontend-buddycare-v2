import { Api } from "../api/Api";

export const getPsychologists = async () => {
  const response = await Api.get("/user/psychologist");
  return response;
};
