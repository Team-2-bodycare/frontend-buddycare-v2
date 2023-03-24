import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/GlobalStyle";

export function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}
