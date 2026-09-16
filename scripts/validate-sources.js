#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const read = (relative) => fs.readFileSync(path.join(root, relative), "utf8");
const registry = read("reference/apple-sources.md");
const ids = new Set([...registry.matchAll(/\| (APPLE_[A-Z_]+|FLUTTER_[A-Z_]+) \|/g)].map((match) => match[1]));
const provenance = new Set(["APPLE_OFFICIAL", "APPLE_DERIVED", "COMMUNITY_FIGMA", "REPOSITORY_RECOMMENDED", "ILLUSTRATIVE", "ASSUMPTION", "UNVERIFIED"]);
const yaml = read("reference/design-tokens.yaml");
const errors = [];
if (/\t/.test(yaml)) errors.push("design-tokens.yaml contains tabs.");
for (const value of [...yaml.matchAll(/^    provenance: ([A-Z_]+)$/gm)].map((match) => match[1])) if (!provenance.has(value)) errors.push(`Invalid token provenance: ${value}`);
for (const source of [...yaml.matchAll(/^    sourceId: ([A-Z_]+)$/gm)].map((match) => match[1])) {
  if (!ids.has(source) && !source.startsWith("FIGMA_")) errors.push(`Token source ID is not registered: ${source}`);
}
const markdownFiles = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full); else if (entry.name.endsWith(".md")) markdownFiles.push(full);
  }
}
walk(root);
for (const file of markdownFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const source of new Set([...text.matchAll(/\b(APPLE_DUO_[A-Z_]+|FLUTTER_[A-Z_]+)\b/g)].map((match) => match[1]))) {
    if (!ids.has(source)) errors.push(`${path.relative(root, file)} references unknown source ID: ${source}`);
  }
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`validate-sources: OK (${ids.size} registry IDs, ${markdownFiles.length} Markdown files, token provenance)`);
