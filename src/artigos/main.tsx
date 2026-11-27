import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ArtigoManejoPage from "./ArtigoManejoPage";
import "../index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ArtigoManejoPage />
  </StrictMode>,
);
