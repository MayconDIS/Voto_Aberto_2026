import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the election comparison", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Voto Aberto 2026/);
  assert.match(html, /Dois projetos/);
  assert.match(html, /Renan Santos/);
  assert.match(html, /Flávio Bolsonaro/);
  assert.match(html, /COMPARADOR DE PROPOSTAS/);
  assert.match(html, /INTENÇÃO DE VOTO/);
  assert.match(html, /Não são votos apurados/);
  assert.match(html, /BR-06520\/2026/);
  assert.match(html, /Datafolha/);
  assert.match(html, /BR-04029\/2026/);
  assert.match(html, /Voltar ao topo da página/);
  assert.match(html, /Sem ranking/);
  assert.match(html, /plano-governo-renan-santos-2026\.pdf/);
  assert.match(html, /plano-governo-flavio-bolsonaro-2026\.pdf/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
});

test("removes starter preview infrastructure", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Voto Aberto/);
  assert.match(layout, /lang="pt-BR"/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
