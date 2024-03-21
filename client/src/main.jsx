import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme/theme-provider.jsx";
import "./index.css";
import { persistor, store } from "./stores/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store} persistor={persistor}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
