// Pré-renderização: insere o HTML do site dentro de <div id="root"> em dist/index.html.
import { readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const distIndex = path.join(root, "dist", "index.html");
const serverEntry = path.join(root, "dist-server", "entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

const template = await readFile(distIndex, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`Marcador ${marker} não encontrado em dist/index.html`);
}
await writeFile(distIndex, template.replace(marker, `<div id="root">${appHtml}</div>`));
await rm(path.join(root, "dist-server"), { recursive: true, force: true });

console.log(`Pré-renderização concluída: ${appHtml.length} caracteres de HTML em dist/index.html`);
