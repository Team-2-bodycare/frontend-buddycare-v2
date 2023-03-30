import {
  NoteButton,
  NoteCommentCard,
  NoteForm,
  NoteInput,
  PatientComment,
  PatientNoteContainer,
  ShowNote,
  ShowNoteName,
} from "./styleNote";
import { useEffect, useState } from "react";
import { INote } from "../../interfaces/INote";
import { NoteService } from "../../services/patient/CreateNote";
import swal from "sweetalert";
import { IPatient } from "../../interfaces/IPatient";
import { getByIdPatient } from "../../services/patient/ByIdPatient";

export function Note() {
  const userId = localStorage.getItem("userId");
  const [patient, setPatient] = useState<IPatient>();

  useEffect(() => {
    patientById();

    setInterval(() => {
      patientById();
    }, 5000);
  }, []);

  async function patientById() {
    const response = await getByIdPatient(`${userId}`);
    setPatient(response.data);
  }

  const [values, setValues] = useState({
    note: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues((values: INote) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNote = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await NoteService.Create(values);

    if (!response) {
      swal({
        title: "Error",
        text: "Dados inválidos",
        icon: "error",
        timer: 5000,
      });
    } else {
      setValues({
        note: "",
      });
    }
  };

  return (
    <PatientNoteContainer>
      <PatientComment>
        {patient?.note.map((noteComment) => {
          return (
            <>
              <NoteCommentCard
                key={noteComment.id}
                style={{
                  background: "rgba(11, 35, 42, 0.7)",
                  color: "rgb(240, 240, 240)",
                }}
              >
                <ShowNote>{noteComment.note}</ShowNote>
                <ShowNoteName>{patient?.name}</ShowNoteName>
              </NoteCommentCard>
              {noteComment.comment === null ? (
                <></>
              ) : (
                <NoteCommentCard
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "rgb(240, 240, 240)",
                  }}
                >
                  <ShowNote>{noteComment.comment}</ShowNote>
                  <ShowNoteName>
                    {patient?.psychologist.psychologist.user.name}
                  </ShowNoteName>
                </NoteCommentCard>
              )}
            </>
          );
        })}
      </PatientComment>
      <NoteForm onSubmit={handleNote}>
        <NoteInput
          autoComplete="off"
          name="note"
          placeholder="mensagem"
          required
          value={values.note}
          onChange={handleChangesValues}
        />
        <NoteButton>Enviar</NoteButton>
      </NoteForm>
    </PatientNoteContainer>
  );
}
