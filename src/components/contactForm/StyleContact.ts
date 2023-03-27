import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

export const StyleH2 = styled.h2`
  display: flex;
  padding: 10px;
  text-align: center;
  color: rgb(115, 115, 115);
`;

export const Form = styled.form`
  display: flex;
  width: 500px;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border: none;
  border-radius: 10px;
  color: #404040;
  box-shadow: 2px 2px 5px black;
  backdrop-filter: blur(15px);

  @media (max-width: 520px) {
    width: 95%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  gap: 10px;
`;

export const ContactLabel = styled.label`
  width: 100%;
  color: rgb(115, 115, 115);
`;

export const Input = styled.input`
  background-color: rgba(240, 240, 240, 0.8);
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 14px;
  color: rgb(115, 115, 115);

  &:focus ~ span,
  &:valid ~ span {
    transform: translateY(-20px);
    padding: 1px 5px 1px 5px;
    background-color: rgb(56, 201, 244);
    border-radius: 3px;
    font-size: 14px;
    opacity: 1;
    color: #ffffff;
  }
`;

export const Textarea = styled.textarea`
  background-color: rgba(240, 240, 240, 0.8);
  width: 100%;
  height: 150px;
  padding: 10px 10px;
  margin: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 14px;
  color: rgb(115, 115, 115);
`;

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 230px;
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
