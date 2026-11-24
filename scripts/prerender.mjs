// Pré-renderização: insere o HTML de cada página dentro de <div id="root"> em dist/.
import { readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const serverEntry = path.join(root, "dist-server", "entry-server.js");
const { pages } = await import(pathToFileURL(serverEntry).href);
const marker = '<div id="root"></div>';

for (const [file, render] of Object.entries(pages)) {
  const target = path.join(root, "dist", file);
  const template = await readFile(target, "utf8");
  if (!template.includes(marker)) {
    throw new Error(`Marcador ${marker} não encontrado em dist/${file}`);
  }
  const appHtml = render();
  await writeFile(target, template.replace(marker, `<div id="root">${appHtml}</div>`));
  console.log(`Pré-renderizado: dist/${file} (${appHtml.length} caracteres)`);
}

await rm(path.join(root, "dist-server"), { recursive: true, force: true });
