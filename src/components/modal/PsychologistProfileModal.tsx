import { useState } from "react";
import Modal from "react-modal";
import { IPsychologistsProfile } from "../../interfaces/IPsychologistsProfile";
import { postPsychologist } from "../../services/psychologist/GetByIdPsychologist";
import { GridModal, ModalContent, ModalTitle, StyleButton, StyleInput } from "./style/StyleModalPsychologist";

interface PsychologistProfileModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onSubmit: (data: Partial<IPsychologistsProfile>) => Promise<void>;
}

interface PsychologistFormData extends Partial<IPsychologistsProfile> {
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
      await postPsychologist(psychologistData); // Alterado para chamar a função postPsychologist
      await onSubmit(psychologistData);
      closeModal();
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  Modal.setAppElement("#root");

  return (

    <Modal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="react-modal-overlay" className="react-modal-content">
      <GridModal>
        <ModalContent>
          <ModalTitle>Atualize seus dados</ModalTitle>
          <form onSubmit={handleSubmit}>
            <div>
              <label>CRP</label>
              <StyleInput type="text" name="crp" value={psychologistData.crp} onChange={handleInputChange} />
            </div>

            <div>
              <label>Especialização</label>
              <StyleInput type="text" name="specialization" value={psychologistData.specialization} onChange={handleInputChange} />
            </div>

            <div>
              <label>Resumo</label>
              <textarea name="summary" value={psychologistData.summary} onChange={handleInputChange} />
            </div>

            <StyleButton type="submit">Salvar</StyleButton>
          </form>
        </ModalContent>
      </GridModal>
    </Modal >

  );
}
