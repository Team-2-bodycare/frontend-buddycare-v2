import {
  NoteButton,
  NoteCommentCard,
  NoteForm,
  NoteInput,
  PatientComment,
  PatientNoteContainer,
} from "./styleNote";
import { useEffect, useState } from "react";
import { INote } from "../../interfaces/INote";
import { NoteService } from "../../services/patient/CreateNote";
import { getAllNotesComments } from "../../services/patient/GetAllNoteComment";
import swal from "sweetalert";
import { IPatient } from "../../interfaces/IPatient";
import { getByIdPatient } from "../../services/patient/ByIdPatient";

export function Note() {
  const userId = localStorage.getItem("userId");
  const [patient, setPatient] = useState<IPatient>();

  useEffect(() => {
    patientById();
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

  const [notesComments, setNotesComments] = useState<INote[]>([]);

  useEffect(() => {
    loadNotesComments();

    setInterval(() => {
      loadNotesComments();
    }, 10000);
  }, []);

  async function loadNotesComments() {
    const response = await getAllNotesComments();

    setNotesComments(response.data);
  }

  return (
    <PatientNoteContainer>
      <PatientComment>
        {notesComments.map((noteComment) => {
          return (
            <>
              <NoteCommentCard
                key={noteComment.id}
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "rgb(240, 240, 240)",
                }}
              >
                <p>{noteComment.note}</p>
                <p>{patient?.name}</p>
                {!userId ? (
                  <div
                    style={{
                      background: "red",
                      width: "10px",
                      borderRadius: "50px",
                      height: "10px",
                    }}
                  ></div>
                ) : (
                  <div
                    style={{
                      background: "green",
                      width: "10px",
                      borderRadius: "50px",
                      height: "10px",
                    }}
                  ></div>
                )}
              </NoteCommentCard>
              {noteComment.comment === null ? (
                <p></p>
              ) : (
                <NoteCommentCard
                  style={{
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "rgb(240, 240, 240)",
                  }}
                >
                  <p>{noteComment.comment}</p>
                  <p>{patient?.psychologist.psychologist.user.name}</p>
                  {!userId ? (
                    <div
                      style={{
                        background: "red",
                        width: "10px",
                        borderRadius: "50px",
                        height: "10px",
                      }}
                    ></div>
                  ) : (
                    <div
                      style={{
                        background: "green",
                        width: "10px",
                        borderRadius: "50px",
                        height: "10px",
                      }}
                    ></div>
                  )}
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
