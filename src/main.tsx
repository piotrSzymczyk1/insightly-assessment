import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MoodProvider } from "./context/MoodProvider.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <MoodProvider>
        <App />
      </MoodProvider>
    </ThemeProvider>
  </StrictMode>,
);
