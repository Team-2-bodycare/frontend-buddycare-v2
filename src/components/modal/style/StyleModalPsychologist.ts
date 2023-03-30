import styled from "styled-components";

export const GridModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 50px auto;
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
  position: relative;
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 5px; 
  margin-right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #888;
  transition: all 0.1s ease-out;

  &:hover{
    font-size: 30px;
    color: #000000;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyleLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
`;

export const StyleInput = styled.input`
  background-color: rgba(240, 240, 240, 0.8);
  width: 240px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  font-size: 14px;
  color: rgb(115, 115, 115);
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
  transition: all 0.1s ease-out;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
