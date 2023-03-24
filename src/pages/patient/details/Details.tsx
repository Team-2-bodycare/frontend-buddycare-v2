import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuPatient } from "../../../components/menuPatient/MenuPatient";
import { IPatientPsychologist } from "../../../interfaces/IPatientPsychologist";
import { IPsychologists } from "../../../interfaces/IPsychologists";
import { createPatientPsychologist } from "../../../services/patientPsychologist/PatientPsychologistId";
import { getByIdPsychologist } from "../../../services/psychologist/ByIdPsychologist";
import {
  DetailsContainer,
  DetailsPhoto,
  DetailsCrp,
  DetailsName,
  DetailsSpecialization,
  DetailsSummary,
  DetailsMain,
  DetailsButton,
  DetailsDiv1,
  DetailsDiv2,
} from "./styleDetails";

export function Detalhe() {
  const { id } = useParams();
  const [psychologist, setPsychologist] = useState<IPsychologists>();

  useEffect(() => {
    psychologisById();
  }, []);

  async function psychologisById() {
    if (id) {
      const response = await getByIdPsychologist(id);
      setPsychologist(response.data);
    }
  }

  const userID = localStorage.getItem("userId");

  if (userID !== null) {
    var data: IPatientPsychologist = {
      userId: userID,
      psychologistId: `${id}`,
    };
    console.log(data);
  }

  const postPatientPsychologist = async () => {
    await createPatientPsychologist(data);
  };

  return (
    <>
      <MenuPatient />
      <DetailsMain>
        <DetailsContainer key={psychologist?.id}>
          <DetailsDiv1>
            <DetailsPhoto src={psychologist?.photo} />
            <DetailsButton onClick={() => postPatientPsychologist()}>
              Contratar
            </DetailsButton>
          </DetailsDiv1>
          <DetailsDiv2>
            <DetailsName>{psychologist?.name}</DetailsName>
            <DetailsCrp>CRP: {psychologist?.worker.crp}</DetailsCrp>
            <DetailsSpecialization>
              Especialização: {psychologist?.worker.specialization}
            </DetailsSpecialization>
            <DetailsSummary>{psychologist?.worker.summary}</DetailsSummary>
          </DetailsDiv2>
        </DetailsContainer>
      </DetailsMain>
    </>
  );
}
