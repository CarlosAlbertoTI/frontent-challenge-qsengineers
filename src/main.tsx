import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dialog, Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@radix-ui/themes/styles.css";

import "@locales/config.ts";

import store from "@store/index";

import theme from "@theme/theme";

import AppRouter from "@routes/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <Dialog.Root>
              <AppRouter />
            </Dialog.Root>
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </Theme>
  </StrictMode>
);
