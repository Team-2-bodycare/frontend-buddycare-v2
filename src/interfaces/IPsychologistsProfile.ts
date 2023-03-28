export interface IPsychologistsProfile {
    id: string;
    name: string;
    worker: {
      crp: string;
      specialization: string;
      summary: string;
    };
    patient: {
        id: string;
        name: string;
        email: string;
        phone: string;
        photo: string;
      };

    user: IUser;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
}

  
  