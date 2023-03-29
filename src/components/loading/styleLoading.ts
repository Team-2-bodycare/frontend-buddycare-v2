import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 300px;
  animation: ${Rotate} 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 100px;
  width: 100px;
  z-index: 2;

  @media (max-width: 600px) {
    height: 50px;
    width: 50px;
  }
`;
