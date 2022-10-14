import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/theme";
import { Provider } from "react-redux";
import { store } from "./store";
import { MainRouter } from "./router/main.router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
