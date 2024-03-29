import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme/theme-provider.jsx";
import "./index.css";
import { persistor, store } from "./stores/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store} persistor={persistor}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
