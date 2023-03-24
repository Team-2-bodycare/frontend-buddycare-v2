import React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
    return (
        <>
            <CopyRight>
                © 2023  Direitos reservados: <TeamName> Team-2-bodycare</TeamName>
            </CopyRight>
        </>
    );
};

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  background-color: rgba(0,0,0,0.7);
  padding: 10px;
  margin-top: 60px;
`;

const TeamName = styled.span`
  font-weight: bold;
`;
