import { IUser } from '../../interfaces/IPsychologistsProfile';
import Modal from 'react-modal';
import { useState } from 'react';
import { CommentNote } from '../comment/CommentNote';
import { ModalGrid, StyleChat, } from './style/StylePatientModal';
import graphic from "../../assets/img/graphic.png";

interface PatientModalProps {
  patient: IUser | null;
  onClose: () => void;
}

export default function PatientModal({ patient, onClose }: PatientModalProps) {
  const [progressData, setProgressData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill: boolean;
      borderColor: string;
      tension: number;
    }[];
  }>({
    labels: [],
    datasets: [
      {
        label: 'Progresso',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  });



  if (!patient) {
    return null;
  }

  return (
    
    <Modal isOpen={true}>
      <ModalGrid>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <div>
      <h2>Detalhes do Paciente</h2>
        <img style={{ width: '150px', borderRadius: '49%' }} src={patient?.photo} alt="Avatar" />
        <h3>{patient?.name}</h3>
        <p>
          <b>Email:</b> {patient?.email}
        </p>
        <p>
          <b>Telefone:</b> {patient?.phone}
        </p>
        <p>
          <b>Progresso:</b> {patient?.worker?.patient[0].user.progress.join(', ')}
        </p>
        <button onClick={onClose}>Fechar</button>
      </div>
      <img src={graphic} alt="" style={{ width: "30%" }} />
      </div>
      <StyleChat>
        <CommentNote />
      </StyleChat>
      </ModalGrid>
    </Modal>
  );
}
