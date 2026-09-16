#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const SKILL_NAME = "iphone-duo-design";
const SOURCE_DIR = path.resolve(__dirname, "..");
const CONTENT = ["SKILL.md", "reference", "platforms", "workflows"];

function parseArgs(argv) {
  const known = new Set(["--global", "-g", "--help", "-h", "--dry-run", "--force", "--backup", "--uninstall"]);
  return { global: argv.includes("--global") || argv.includes("-g"), help: argv.includes("--help") || argv.includes("-h"), dryRun: argv.includes("--dry-run"), force: argv.includes("--force"), backup: argv.includes("--backup"), uninstall: argv.includes("--uninstall"), unknown: argv.filter((arg) => !known.has(arg)) };
}
function printHelp() { console.log("\niphone-duo-design-skill installer\n\nUsage:\n  npx iphone-duo-design-skill [options]\n\nOptions:\n  -g, --global  Install to ~/.claude/skills instead of the current project\n  --dry-run      Print actions without changing files\n  --force        Replace an existing installation\n  --backup       Back up an existing installation before replacing it\n  --uninstall    Remove this skill installation only\n  -h, --help     Show this help\n"); }
function targetFor(isGlobal) {
  const base = isGlobal ? path.join(os.homedir(), ".claude", "skills") : path.join(process.cwd(), ".claude", "skills");
  const target = path.resolve(base, SKILL_NAME);
  if (path.dirname(target) !== path.resolve(base)) throw new Error("Refusing an unsafe installation path.");
  return target;
}
function copyContent(target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of CONTENT) {
    const source = path.join(SOURCE_DIR, entry);
    if (!fs.existsSync(source)) throw new Error(`Package content is missing: ${entry}`);
    fs.cpSync(source, path.join(target, entry), { recursive: true, errorOnExist: false, force: true });
  }
}
function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) return printHelp();
  if (args.unknown.length) throw new Error(`Unknown option(s): ${args.unknown.join(", ")}`);
  if (args.force && args.backup) throw new Error("Use either --force or --backup, not both.");
  const target = targetFor(args.global);
  const exists = fs.existsSync(target);
  if (args.uninstall) {
    if (!exists) return console.log(`No installation found at: ${target}`);
    if (args.dryRun) return console.log(`Would remove: ${target}`);
    fs.rmSync(target, { recursive: true, force: false });
    return console.log(`Removed iphone-duo-design skill from: ${target}`);
  }
  if (exists && !args.force && !args.backup) throw new Error(`Installation already exists: ${target}\nUse --backup to preserve it, or --force to replace it.`);
  if (args.dryRun) return console.log(`${exists ? "Would replace" : "Would install"} iphone-duo-design skill at: ${target}`);
  if (exists && args.backup) {
    const backup = `${target}.backup-${new Date().toISOString().replace(/[:.]/g, "-")}`;
    fs.renameSync(target, backup);
    console.log(`Backed up existing installation to: ${backup}`);
  } else if (exists) fs.rmSync(target, { recursive: true, force: false });
  copyContent(target);
  console.log(`Installed iphone-duo-design skill to: ${target}`);
}
try { main(); } catch (error) { console.error(`Installer error: ${error.message}`); process.exitCode = 1; }
