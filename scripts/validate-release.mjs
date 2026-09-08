import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  ".cursor-plugin/plugin.json",
  "mcp.json",
  "README.md",
  "PRIVACY.md",
  "SECURITY.md",
  "LICENSE",
  "assets/logo.svg",
];

for (const file of requiredFiles) await access(file);

const manifest = JSON.parse(await readFile(".cursor-plugin/plugin.json", "utf8"));
const mcp = JSON.parse(await readFile("mcp.json", "utf8"));

if (!/^[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/.test(manifest.name)) {
  throw new Error("Plugin name must be lowercase and kebab-case");
}
if (!/^\d+\.\d+\.\d+$/.test(manifest.version)) throw new Error("Version must use SemVer");
if (manifest.mcpServers !== "./mcp.json") throw new Error("Manifest must reference ./mcp.json");
if (manifest.logo !== "assets/logo.svg") throw new Error("Logo must use its relative path");
if (!manifest.repository?.startsWith("https://github.com/")) {
  throw new Error("Manifest must include a public GitHub repository URL");
}

const servers = Object.values(mcp.mcpServers ?? {});
if (servers.length !== 1) throw new Error("Package must define exactly one MCP server");
const endpoint = new URL(servers[0].url);
if (endpoint.protocol !== "https:" || endpoint.pathname !== "/mcp") {
  throw new Error("MCP server must use an HTTPS /mcp endpoint");
}

console.log(`Validated ${manifest.name} v${manifest.version} (${endpoint.href})`);
