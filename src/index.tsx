import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./App.styled";
import App from "./App";
import { lightTheme } from "./styles/theme";
// import { Global } from "@emotion/react";
import GlobalStyles from "./styles/GlobalStyles";
// import { GlobalStyles } from "./App.styled";

const currentTheme = lightTheme;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BrowserRouter basename="/standart-template">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
