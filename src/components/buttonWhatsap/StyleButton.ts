import styled from "styled-components";

export const StyleButtton = styled.div`
position:fixed;
bottom:20px;
right:50px;
cursor:pointer;
color: #ffffff;
box-shadow: 5px 5px 5px #aaaaaa;
border-radius: 10px;
border: 1px solid #ffffff;
padding: 3px;
background-color: rgba(0,250,250,0.3);
transition: all 0.2s ease-in-out;

&:hover {
    transform: translateY(-5px);
  }

`;