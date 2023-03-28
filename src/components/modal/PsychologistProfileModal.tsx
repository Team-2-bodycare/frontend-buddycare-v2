import { useState } from "react";
import Modal from "react-modal";
import { IPsychologistsProfile } from "../../interfaces/IPsychologistsProfile";
import { postPsychologist } from "../../services/psychologist/GetByIdPsychologist";

interface PsychologistProfileModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: (data: Partial<IPsychologistsProfile>) => Promise<void>;
}

interface PsychologistFormData {
  crp: string;
  specialization: string;
  summary: string;
  userId: string;
}

export function PsychologistProfileModal({ isOpen, closeModal, onSubmit }: PsychologistProfileModalProps) {
  const [psychologistData, setPsychologistData] = useState<PsychologistFormData>({
    crp: "",
    specialization: "",
    summary: "",
    userId: localStorage.getItem("userId") || "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setPsychologistData({ ...psychologistData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const { userId, ...data } = psychologistData; // extrai userId e o restante dos dados
      await postPsychologist(userId, data); // passa apenas o userId como argumento para a função
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  
  Modal.setAppElement("#root"); // movido para dentro do componente

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="react-modal-overlay" className="react-modal-content">
      <h2>Atualize seus dados</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>CRP</label>
          <input type="text" name="crp" value={psychologistData.crp} onChange={handleInputChange} />
        </div>

        <div>
          <label>Especialização</label>
          <input type="text" name="specialization" value={psychologistData.specialization} onChange={handleInputChange} />
        </div>

        <div>
          <label>Resumo</label>
          <textarea name="summary" value={psychologistData.summary} onChange={handleInputChange} />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </Modal>
  );
}
