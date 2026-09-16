#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const required = [
  "SKILL.md", "README.md", "LICENSE", "NOTICE.md", "package.json", "bin/install.js",
  "reference/apple-sources.md", "reference/device-facts.md", "reference/api-index.md",
  "reference/figma-source.md", "reference/figma-node-index.json", "reference/design-tokens.yaml",
  "reference/legal-and-attribution.md", "reference/compatibility.md", "reference/acceptance-scenarios.md", "reference/design-rules.md", "reference/accessibility.md",
  "platforms/swiftui.md", "platforms/uikit.md", "platforms/flutter.md",
  "workflows/new-screen.md", "workflows/adaptive-layout.md", "workflows/design-review.md", "workflows/implementation-review.md"
];
const errors = [];
for (const file of required) if (!fs.existsSync(path.join(root, file))) errors.push(`Missing required file: ${file}`);
const skill = fs.readFileSync(path.join(root, "SKILL.md"), "utf8");
if (!skill.startsWith("---\n") || skill.indexOf("\n---\n", 4) < 0) errors.push("SKILL.md must begin with YAML frontmatter.");
if (!/^name: iphone-duo-design$/m.test(skill)) errors.push("SKILL.md frontmatter name is missing or changed.");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
for (const script of ["validate", "validate:sources"]) if (!packageJson.scripts || !packageJson.scripts[script]) errors.push(`package.json is missing script: ${script}`);
JSON.parse(fs.readFileSync(path.join(root, "reference/figma-node-index.json"), "utf8"));
const license = fs.readFileSync(path.join(root, "LICENSE"), "utf8");
const mitText = `MIT License

Copyright (c) 2026 Mahmoud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
if (!license.startsWith(`${mitText}\n---\n`)) errors.push("LICENSE canonical MIT text was changed or is not visibly separated from its notice.");
if (!/\(Not part of the MIT License text\)/.test(license)) errors.push("LICENSE scope notice must be marked as separate from the MIT text.");
const authority = `${skill}\n${fs.readFileSync(path.join(root, "README.md"), "utf8")}\n${packageJson.description}`;
for (const phrase of ["not a real", "not real", "not shipping", "conceptual foldable", "speculative/community"]) {
  if (authority.toLowerCase().includes(phrase)) errors.push(`Outdated product-status phrase in an authority document: ${phrase}`);
}
const figmaStatus = ["reference/figma-source.md", "reference/page-node-map.md", "reference/legal-and-attribution.md"]
  .map((file) => fs.readFileSync(path.join(root, file), "utf8"))
  .join("\n");
for (const phrase of ["hit Figma MCP rate limit", "About page (`3:637`) was not extracted", "Known gap — read before publishing"]) {
  if (figmaStatus.includes(phrase)) errors.push(`Stale About-page blocker remains: ${phrase}`);
}
const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
for (const match of readme.matchAll(/\]\(([^)\s]+)\)/g)) {
  const target = match[1];
  if (/^(?:https?:|mailto:|#)/.test(target)) continue;
  const relativePath = target.split("#", 1)[0];
  if (relativePath && !fs.existsSync(path.resolve(root, relativePath))) {
    errors.push(`README relative link does not resolve: ${target}`);
  }
}
if (!readme.includes("[@m238d211](https://github.com/m238d211)")) errors.push("README must credit the repository owner/maintainer.");
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`validate-skill: OK (${required.length} required files, frontmatter, JSON, authority wording)`);
