import { IUser } from '../../interfaces/IPsychologistsProfile';
import Modal from 'react-modal';
import { Graphic } from '../graphic/Graphic';
import { useState } from 'react';
import { CommentNote } from '../comment/CommentNote';

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
            <h2>Detalhes do Paciente</h2>
            <div>
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
            </div>
            <button onClick={onClose}>Fechar</button>

            <CommentNote/>
            {/* <Graphic labels={data.labels} datasets={data.datasets} /> */}
        </Modal>
    );
}
