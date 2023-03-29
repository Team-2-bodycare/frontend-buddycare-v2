import styled from "styled-components";

export const GridModal = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 10px;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px black;
`;


export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StyleInput = styled.input`
background-color: rgba(240, 240, 240, 0.8);
width: 240px;
padding: 10px;
margin-top: 20px;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.5);
outline: none;
font-size: 14px;
color: rgb(115, 115, 115);

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
`;

export const StyleButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 240px;
  margin-top: 10px;
  padding: 10px;
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