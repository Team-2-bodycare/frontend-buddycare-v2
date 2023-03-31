import { useState } from "react";
import Modal from "react-modal";
import { IPsychologistsProfile } from "../../interfaces/IPsychologistsProfile";
import { postPsychologist } from "../../services/psychologist/GetByIdPsychologist";
import {
  CloseButton,
  GridModal,
  InputWrapper,
  ModalContent,
  ModalTitle,
  StyleButton,
  StyleInput,
  StyleLabel,
} from "./style/StyleModalPsychologist";

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

export function PsychologistProfileModal({
  isOpen,
  closeModal,
  onSubmit,
}: PsychologistProfileModalProps) {
  const [psychologistData, setPsychologistData] =
    useState<PsychologistFormData>({
      crp: "",
      specialization: "",
      summary: "",
      userId: localStorage.getItem("userId") || "",
    });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPsychologistData({ ...psychologistData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await postPsychologist(psychologistData);
      await onSubmit(psychologistData);
      closeModal();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <GridModal>
        <ModalContent>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <ModalTitle>Atualize seus dados</ModalTitle>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <StyleLabel htmlFor="crp">CRP</StyleLabel>
              <StyleInput
                type="text"
                id="crp"
                name="crp"
                value={psychologistData.crp}
                onChange={handleInputChange}
              />
            </InputWrapper>

            <InputWrapper>
              <StyleLabel htmlFor="specialization">Especialização</StyleLabel>
              <StyleInput
                type="text"
                id="specialization"
                name="specialization"
                value={psychologistData.specialization}
                onChange={handleInputChange}
              />
            </InputWrapper>

            <InputWrapper>
              <StyleLabel htmlFor="summary">Resumo</StyleLabel>
              <textarea
                style={{
                  width: "250px",
                  height: "100px",
                  fontSize: "1rem",
                  padding: "10px",
                }}
                id="summary"
                name="summary"
                value={psychologistData.summary}
                onChange={handleInputChange}
              />
            </InputWrapper>

            <StyleButton type="submit">Salvar</StyleButton>
          </form>
        </ModalContent>
      </GridModal>
    </Modal>
  );
}
