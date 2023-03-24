import {
  ListCard,
  ListCardGrid,
  ListContainer,
  ListName,
  ListPhoto,
  ListSpecialization,
} from "./styleListPsychologist";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPsychologists } from "../../interfaces/IPsychologists";
import { getPsychologists } from "../../services/psychologist/ListPsychologist";

export function ListPsychologist() {
  const navigate = useNavigate();
  const [psychologists, setPsychologists] = useState<IPsychologists[]>([]);

  useEffect(() => {
    loadPsychologists();
  }, []);

  async function loadPsychologists() {
    const response = await getPsychologists();

    setPsychologists(response.data);
  }

  return (
    <ListContainer>
      <ListCardGrid>
        {psychologists.map((psychologist) => {
          return (
            <ListCard
              onClick={() => navigate(`/detalhe/${psychologist.id}`)}
              key={psychologist.id}
            >
              <ListName>{psychologist.name}</ListName>
              <ListPhoto src={psychologist.photo} />
              <ListSpecialization>
                {psychologist.worker.specialization}
              </ListSpecialization>
            </ListCard>
          );
        })}
      </ListCardGrid>
    </ListContainer>
  );
}
