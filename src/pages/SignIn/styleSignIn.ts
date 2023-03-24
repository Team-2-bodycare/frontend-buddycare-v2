import styled from "styled-components";
import background from "../../assets/img/background2.png";

export const SignInContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInImgHome = styled.img`
  width: 50px;
  position: absolute;
  left: 10px;
  top: 10px;
  cursor: pointer;
`;

export const SignInForm = styled.form`
  width: 260px;
  border-radius: 20px;
  border: none;
  padding: 0px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignInLogo = styled.img`
  width: 80px;
  margin-bottom: 0;
`;

export const SignInTitle = styled.h2`
  font-size: 18px;
  color: white;
`;

export const SignInInput = styled.input`
  background-color: rgba(240, 240, 240, 0.8);
  width: 240px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid rgb(56, 201, 244);
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
    color: white;
  }
`;

export const SignInFormGroup = styled.div`
  position: relative;
`;

export const SignInSpanEmail = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const SignInSpanPassword = styled.span`
  position: absolute;
  left: 10px;
  top: 30px;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0.5;
`;

export const SignInButton = styled.button`
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

export const SignInAccount = styled.p`
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