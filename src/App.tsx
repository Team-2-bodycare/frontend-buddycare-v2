import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import GlobalStyle from "./styles/GlobalStyles";

const theme = createTheme({});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
