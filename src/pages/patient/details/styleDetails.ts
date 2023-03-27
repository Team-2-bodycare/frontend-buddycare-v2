import styled from "styled-components";

export const DetailsMain = styled.div`
  background: rgb(200, 200, 200);
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 100px 10px 30px 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const DetailsDiv1 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const DetailsDiv2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  @media (max-width: 600px) {
    padding: 5px 20px 20px 20px;
  }
`;

export const DetailsPhoto = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const DetailsName = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(115, 115, 115);
`;

export const DetailsSpecialization = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  color: rgb(115, 115, 115);
`;

export const DetailsSummary = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  color: rgb(115, 115, 115);
`;

export const DetailsCrp = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  color: rgb(115, 115, 115);
`;

export const DetailsButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 50%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.8s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
