export interface IPsychologistsProfile {
    id: string;
    name: string;
    worker: {
      crp: string;
      specialization: string;
      summary: string;
    };
} 


export interface IUser {
  id?: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
  photo: string;
  worker: {
    crp: string;
    specialization: string;
    summary: string;
    patient: [ 
      user: {
       user: any;
       id: string;
       name: string;
       email: string;
       phone: string;
       photo: string;
       progress: [];
       note:[]
     }
     ]
  }
}

