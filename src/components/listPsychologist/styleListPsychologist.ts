import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 70px;
`;

export const ListNotExist = styled.h2`
  color: red;
`;

export const ListCardGrid = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  padding: 10px;
  margin-top: 20px;
`;

export const ListCard = styled.div`
  background: rgba(210, 210, 210, 0.3);
  display: flex;
  width: 100%;
  max-width: 400px;
  height: auto;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 5px black;
    backdrop-filter: blur(15px);
    border: none;
  }
`;

export const ListPhoto = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;

export const ListName = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: rgb(115, 115, 115);
  padding: 10px;
`;

export const ListSpecialization = styled.p`
  text-align: center;
  font-weight: bold;
  color: rgb(115, 115, 115);
`;
