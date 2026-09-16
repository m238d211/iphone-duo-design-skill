#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "iphone-duo-design";
const SOURCE_DIR = path.join(__dirname, "..");
const FILES_TO_COPY = ["SKILL.md", "reference"];

function parseArgs(argv) {
  return {
    global: argv.includes("--global") || argv.includes("-g"),
    help: argv.includes("--help") || argv.includes("-h"),
  };
}

function printHelp() {
  console.log(`
iphone-duo-design-skill installer

Usage:
  npx iphone-duo-design-skill            Install into ./.claude/skills (current project)
  npx iphone-duo-design-skill --global   Install into ~/.claude/skills (all projects)

Options:
  -g, --global   Install to the user-level skills directory instead of the project directory
  -h, --help     Show this help message
`);
}

function install(isGlobal) {
  const targetBase = isGlobal
    ? path.join(os.homedir(), ".claude", "skills")
    : path.join(process.cwd(), ".claude", "skills");
  const targetDir = path.join(targetBase, SKILL_NAME);

  fs.mkdirSync(targetDir, { recursive: true });

  for (const file of FILES_TO_COPY) {
    const src = path.join(SOURCE_DIR, file);
    const dest = path.join(targetDir, file);
    if (!fs.existsSync(src)) {
      continue;
    }
    fs.cpSync(src, dest, { recursive: true });
  }

  console.log(`✔ Installed iphone-duo-design skill to: ${targetDir}`);
  console.log(
    isGlobal
      ? "  Available to Claude Code in every project on this machine."
      : "  Available to Claude Code in this project. Commit .claude/skills/ if you want it versioned with the repo."
  );
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    return;
  }

  install(args.global);
}

main();
