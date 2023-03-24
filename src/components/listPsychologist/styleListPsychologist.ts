import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 70px;
`;

export const ListCardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  padding: 10px;
  margin-top: 20px;
`;

export const ListCard = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  border-radius: 20px;
  border: 1px solid #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const ListPhoto = styled.img`
  width: auto;
  height: 250px;
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
