export interface ISignUp {
  name: string;
  email: string;
  phone: string;
  password: string;
  photo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isPsychologist: boolean;
}
