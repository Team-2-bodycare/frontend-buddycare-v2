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

export const postPsychologist = async (data: PsychologistFormData) => {
  const response = await Api.post(`/psychologist`, data);
  return response;
};;

export const updatePsychologist = async (id: string, data: PsychologistFormData) => {
  const psychologist = await getByIdPsychologist(id);
  const updatedPsychologist = { ...psychologist.data, ...data };
  const response = await Api.patch(`/psychologist/${id}`, updatedPsychologist);
  return response;
};

