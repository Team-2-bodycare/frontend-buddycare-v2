import styled from 'styled-components';

export const StyleH2 = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  color: #404040;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  color: #404040;
`;

export const InputContainer = styled.div`
  display: flex;
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

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 48%;
  }
`;

export const Input = styled.input`
  background-color: rgba(240, 240, 240, 0.8);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ffffff;
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
  margin: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ffffff;
  outline: none;
  font-size: 14px;
  color: rgb(115, 115, 115);
`;

export const Button = styled.button`
  background-color: rgb(56, 201, 244);
  width: 240px;
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
    background-color: rgb(46, 171, 244);
  }
`;
