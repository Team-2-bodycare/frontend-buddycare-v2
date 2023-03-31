import {
  NoteButton,
  NoteCommentCard,
  NoteForm,
  NoteInput,
  PatientComment,
  PatientNoteContainer,
  ShowComment,
  ShowCommentName,
} from "./styleComment";
import { useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import { getByIdPsychologist } from "../../services/psychologist/ByIdPsychologist";
import { IComment } from "../../interfaces/IComment";
import { notesService } from "../../services/notes/NotesService";
import { IComments } from "../../interfaces/IComments";

export function CommentNote() {
  const userId = localStorage.getItem("userId");

  const [psychologist, setPsychologist] = useState<IComments>();

  useEffect(() => {
    psychologistById();

    setInterval(() => {
      psychologistById();
    }, 5000);
  }, []);

  async function psychologistById() {
    const response = await getByIdPsychologist(`${userId}`);
    setPsychologist(response.data);
  }

  const [values, setValues] = useState({
    comment: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues((values: IComment) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNote = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const idNote = psychologist?.worker.patient.map((noteComment) =>
      noteComment.user.note.map((id) => id.id).at(-1)
    );

    const response: any = await notesService.Create(
      `${idNote?.at(-1)}`,
      values
    );

    if (!response) {
      swal({
        title: "Error",
        text: "Dados inválidos",
        icon: "error",
        timer: 5000,
      });
    } else {
      setValues({
        comment: "",
      });
    }
  };

  return (
    <PatientNoteContainer>
      <PatientComment>
        {psychologist?.worker.patient.map((notes) =>
          notes.user.note.map((noteComment) => {
            return (
              <>
                <NoteCommentCard
                  key={noteComment.id}
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "rgb(240, 240, 240)",
                  }}
                >
                  <div>
                    <ShowCommentName>
                      {psychologist.worker.patient.map(
                        (patient) => patient.user.name
                      )}
                    </ShowCommentName>
                    <ShowComment>{noteComment.note}</ShowComment>
                  </div>
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
                    <div>
                      <ShowCommentName>{psychologist?.name}</ShowCommentName>
                      <ShowComment>{noteComment.comment}</ShowComment>
                    </div>
                  </NoteCommentCard>
                )}
              </>
            );
          })
        )}
      </PatientComment>
      <NoteForm onSubmit={handleNote}>
        {psychologist?.worker.patient
          .map((notes) => notes.user.note.map((comment) => comment.comment))[0]
          .at(-1) === null ? (
          <NoteInput
            autoComplete="off"
            name="comment"
            placeholder="mensagem"
            required
            value={values.comment}
            onChange={handleChangesValues}
          />
        ) : (
          <NoteInput
            disabled
            autoComplete="off"
            name="comment"
            placeholder="mensagem"
            required
            value={values.comment}
            onChange={handleChangesValues}
          />
        )}
        <NoteButton>Enviar</NoteButton>
      </NoteForm>
    </PatientNoteContainer>
  );
}
