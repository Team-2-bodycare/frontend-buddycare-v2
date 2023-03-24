export interface IPsychologists {
  id: string;
  name: string;
  photo: string;
  worker: {
    crp: string;
    specialization: string;
    summary: string;
  };
}
