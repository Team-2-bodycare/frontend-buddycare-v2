import { Api } from "../api/Api";
import { IPatientPsychologist } from "../../interfaces/IPatientPsychologist";

export const createPatientPsychologist = async (patientPsychologist: IPatientPsychologist) => {
  const response = await Api.post(`/pp`, patientPsychologist);
  return response;
};
