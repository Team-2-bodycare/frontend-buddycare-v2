import { useRef } from "react";
import { Modal, ModalContent, ModalFooter, ModalTitle } from "./style/StyleModalPsychologist";
import { IPsychologistsProfile } from "../../interfaces/IPsychologistsProfile";
import { updatePsychologist } from "../../services/psychologist/GetByIdPsychologist";


type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (updatedData: Partial<IPsychologistsProfile>) => Promise<void>;
  user: IPsychologistsProfile;
  handleClose?: () => void;
};



export function PsychologistProfileModal({ show = false, setShow, onSave, user }: Props) {
  const crpRef = useRef<HTMLInputElement>(null);
  const specializationRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLTextAreaElement>(null);

  const handleClose = () => setShow(false);

  const handleSave = async () => {
    const newData = {
      worker: {
        crp: crpRef.current?.value,
        specialization: specializationRef.current?.value,
        summary: summaryRef.current?.value
      }
    };
  
    await updatePsychologist(user.id, newData as Partial<IPsychologistsProfile>);
    onSave(user);
    handleClose();
  };
  
  

  return (
    <Modal as="div" onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>Editar informações</ModalTitle>
        <label>
          CRP:
          <input type="text" ref={crpRef} defaultValue={user.worker.crp} />
        </label>
        <label>
          Especialização:
          <input type="text" ref={specializationRef} defaultValue={user.worker.specialization} />
        </label>
        <label>
          Resumo:
          <textarea rows={4} ref={summaryRef} defaultValue={user.worker.summary}></textarea>
        </label>
        <label>
          Foto:
          <input type="file" />
        </label>
        <ModalFooter>
          <button onClick={handleClose}>Cancelar</button>
          <button onClick={handleSave}>Salvar</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
