import styled from "styled-components";

// Estilização das notas do paciente

export const PatientNoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  @media (max-width: 600px) {
    height: auto;
  }
`;

// Get da nota e do comentário

export const PatientComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const NoteCommentCard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

// Fim do Get

export const NoteForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

export const NoteInput = styled.textarea`
  background-color: rgba(240, 240, 240, 0.8);
  width: 100%;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  resize: none;
  font-size: 14px;
  color: rgb(15, 15, 15);

  &:focus ~ span,
  &:valid ~ span {
    transform: translateY(-20px);
    padding: 1px 5px 1px 5px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    font-size: 14px;
    opacity: 1;
    color: white;
  }

  @media (max-width: 600px) {
    height: 40px;
  }
`;

export const NoteFormGroup = styled.div`
  position: relative;
`;

export const NoteButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: rgb(200, 200, 200);
  font-size: 16px;
  font-weight: bold;
  transition: all 0.8s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
