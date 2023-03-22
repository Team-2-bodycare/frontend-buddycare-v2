import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    }
  }
`;
export default GlobalStyle;

export const Body = styled.body`
background-image: src("..");
background-size: cover;
background-repeat: no-repeat;
`;