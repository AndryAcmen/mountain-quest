// Pre-renders the TanStack Start app to dist/client/index.html
// so the build output can be served as a plain static SPA by Nginx,
// without any Cloudflare Worker / Wrangler / Node server in production.
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const workerPath = resolve("dist/server/index.js");
const mod = await import(pathToFileURL(workerPath).href);
const handler = mod.default ?? mod.createServerEntry?.();

if (!handler || typeof handler.fetch !== "function") {
  throw new Error("Worker module does not export a fetch handler");
}

const routes = ["/"];
const baseUrl = "http://localhost";

for (const route of routes) {
  const req = new Request(baseUrl + route, { method: "GET" });
  const res = await handler.fetch(req, {}, { waitUntil: () => {}, passThroughOnException: () => {} });
  if (!res.ok && res.status !== 200) {
    throw new Error(`Prerender ${route} failed: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();
  const outName = route === "/" ? "index.html" : `${route.replace(/^\//, "").replace(/\/$/, "")}.html`;
  const outPath = resolve("dist/client", outName);
  await writeFile(outPath, html, "utf8");
  console.log(`Prerendered ${route} -> ${outPath} (${html.length} bytes)`);
}
