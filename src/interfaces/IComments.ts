export interface IComments {
  id?: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  isPsychologist: boolean;
  createdAt: Date;
  updatedAt: Date;
  worker: {
    id?: string;
    crp: string;
    specialization: string;
    summary: string;
    createdAt: Date;
    updatedAt: Date;
    patient: [
      {
        user: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          photo: string;
          isPsychologist: boolean;
          createdAt: Date;
          updatedAt: Date;
          progress: [];
          note: [
            {
              id?: string;
              note: string;
              score: number;
              comment: string;
              createdAt: Date;
              updatedAt: Date;
              patientId: string;
            }
          ];
        };
      }
    ];
  };
}
