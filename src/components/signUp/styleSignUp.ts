import styled from "styled-components";
import background from "../../assets/img/background.jpg";

export const SignUpContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpImgHome = styled.img`
  width: 50px;
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
`;

export const SignUpForm = styled.form`
  width: 260px;
  border: none;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 5px black;
  backdrop-filter: blur(15px);
`;

export const SignUpLogo = styled.img`
  width: 80px;
  padding: 10px;
  margin-bottom: 0;
`;

export const SignUpTitle = styled.h2`
  font-size: 18px;
  color: rgb(200, 200, 200);
  margin: 0;
`;

export const SignUpInput = styled.input`
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

export const SignUpFormGroup = styled.div`
  position: relative;
`;

export const SignUpSpanName = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const SignUpSpanEmail = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const SignUpSpanPhone = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const SignUpSpanPassword = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const SignUpButton = styled.button`
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

export const SignUpAccount = styled.p`
  margin: 0;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  color: rgb(200, 200, 200);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: white;
  }
`;
