import { IPsychologistsProfile } from "../../interfaces/IPsychologistsProfile";
import { Api } from "../api/Api";

export interface PsychologistFormData {
  crp: string;
  specialization: string;
  summary: string;
}

export const getByIdPsychologist = async (id: string) => {
  const response = await Api.get(`/psychologist/${id}`);
  return response;
};

export async function postPsychologist(userId: string, data: PsychologistFormData) {
  const response = await Api.post(`/psychologist`, { userId, ...data });
  return response;
};

export const updatePsychologist = async (id: string, data: Partial<IPsychologistsProfile>) => {
  const response = await Api.patch(`/psychologist/${id}`, data);
  return response;
};
