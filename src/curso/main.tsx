import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CursoPage from "./CursoPage";
import "../index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CursoPage />
  </StrictMode>,
);
