export interface IPsychologists {
  id: string;
  name: string;
  photo: string;
  note: [
    {
      id?: string;
      note: string;
      comment: string;
      score: number;
    }
  ];
  worker: {
    crp: string;
    specialization: string;
    summary: string;
  };
}
