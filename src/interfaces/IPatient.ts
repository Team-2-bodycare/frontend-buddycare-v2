export interface IPatient {
  id?: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  isPsychologist: boolean;
  userId: string;
  psychologist: {
    psychologist: {
      id: string;
      crp: string;
      specialization?: string;
      summary: string;
      user: {
        id: string;
        name: string;
        email: string;
        phone: string;
        photo: string;
      };
    };
  };
}
