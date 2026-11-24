import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

// Gera o HTML da página no momento do build, para que buscadores e IAs
// leiam o conteúdo sem precisar executar JavaScript.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
