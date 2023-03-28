import { IPsychologistsProfile } from "../../interfaces/IPsychologistsProfile";
import { Api } from "../api/Api";


export const getByIdPsychologist = async (id: string) => {
  const response = await Api.get(`/psychologist/${id}`);
  return response;
};

export const postByIdPsychologist = async (id: string) => {
  const response = await Api.post(`/psychologist`);
  return response;
};


export const updatePsychologist = async (id: string, data: Partial<IPsychologistsProfile>) => {
  const response = await Api.patch(`/psychologist/${id}`, data);
  return response;
};
