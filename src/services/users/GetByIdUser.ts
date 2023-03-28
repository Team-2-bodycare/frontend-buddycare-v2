import { IUser } from "../../interfaces/IPsychologistsProfile";
import { Api } from "../api/Api";


export const getByIdUser = async (id: string) => {
  const response = await Api.get(`/user/${id}`);
  return response;
};

export const postByIdUser = async (id: string) => {
  const response = await Api.post(`/user`);
  return response;
};


export const updateUser = async (id: string, data: Partial<IUser>) => {
  const response = await Api.patch(`/user/${id}`, data);
  return response;
};
