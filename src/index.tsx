import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./App.styled";
import App from "./App";
import { lightTheme } from "./styles/theme";

const currentTheme = lightTheme;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={currentTheme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter basename="/standart-template">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
