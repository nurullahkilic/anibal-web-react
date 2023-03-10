import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./fonts.css";
import "./config/i18n";

//React Router
import { BrowserRouter, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

//Emotions Theme
import { ThemeProvider } from "@emotion/react";
import { theme } from "./config/theme";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/anibal">
        <Wrapper>
          <App />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
