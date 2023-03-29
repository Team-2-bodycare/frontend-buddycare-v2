import styled from "styled-components";

export const UserUpdateForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserUpdateLogo = styled.img`
  width: 80px;
  padding: 10px;
  margin-bottom: 0;
`;

export const UserUpdateTitle = styled.h2`
  font-size: 18px;
  color: rgb(200, 200, 200);;
  margin: 0;
`;

export const UserUpdateInput = styled.input`
  background-color: rgba(240, 240, 240, 0.8);
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  font-size: 14px;
  color: rgb(15, 15, 15);

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

export const UserUpdateFormGroup = styled.div`
  width: 100%;
  position: relative;
`;

export const UserUpdateSpanName = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const UserUpdateSpanEmail = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const UserUpdateSpanPhone = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const UserUpdateSpanPhoto = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const UserUpdateSpanPassword = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const UserUpdateButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
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
