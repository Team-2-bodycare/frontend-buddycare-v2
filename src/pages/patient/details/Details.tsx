import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuUser } from "../../../components/menuUser/MenuUser";
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
  DetailsDivButton,
} from "./styleDetails";

export function Detalhe() {
  const navigate = useNavigate();
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
  }

  const postPatientPsychologist = async () => {
    await createPatientPsychologist(data);

    setTimeout(() => {
      navigate("/patient-profile");
    }, 3000);
  };

  return (
    <>
      <MenuUser />
      <DetailsMain>
        <DetailsContainer key={psychologist?.id}>
          <DetailsDiv1>
            <DetailsPhoto src={psychologist?.photo} />
          </DetailsDiv1>
          <DetailsDiv2>
            <DetailsName>{psychologist?.name}</DetailsName>
            <DetailsCrp>CRP: {psychologist?.worker.crp}</DetailsCrp>
            <DetailsSpecialization>
              Especialização: {psychologist?.worker.specialization}
            </DetailsSpecialization>
            <DetailsSummary>{psychologist?.worker.summary}</DetailsSummary>
            <DetailsDivButton style={{display: "flex", gap: "10px"}}>
            <DetailsButton onClick={() => postPatientPsychologist()}>
              Contratar
            </DetailsButton>
            <DetailsButton onClick={() => navigate(-1)}>Voltar</DetailsButton>
            </DetailsDivButton>
          </DetailsDiv2>
        </DetailsContainer>
      </DetailsMain>
    </>
  );
}
