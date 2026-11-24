import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import CursoPage from "./curso/CursoPage";

// Gera o HTML das páginas no momento do build, para que buscadores e IAs
// leiam o conteúdo sem precisar executar JavaScript.
export const pages: Record<string, () => string> = {
  "index.html": () =>
    renderToString(
      <StrictMode>
        <App />
      </StrictMode>,
    ),
  "curso-psicanalise-winnicottiana/index.html": () =>
    renderToString(
      <StrictMode>
        <CursoPage />
      </StrictMode>,
    ),
};
