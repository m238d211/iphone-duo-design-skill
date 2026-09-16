# iphone-duo-design-skill

A [Claude Skill](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) — and, since it's plain Markdown with no vendor-specific instructions, usable as reference material by any AI coding/design agent — that packages design guidance for **iPhone Duo**, a conceptual foldable/dual-screen iPhone documented in the Figma community file [iPhone Duo UI/UX](https://www.figma.com/design/A8CGHj3fosazzLjxUN5CtM/iPhone-Duo-UI-UX--Community-).

> **Note:** iPhone Duo is not a real, currently shipping Apple product. This is a speculative/concept design kit styled after Apple's Human Interface Guidelines. See [`SKILL.md`](./SKILL.md) for the provenance system this kit uses to mark which numbers are real Apple values vs. invented ones.

## Summary

This skill teaches an AI agent how to design UI for iPhone Duo: the six device configurations (Outer/Inner × Portrait/Landscape, plus Partial Book/Tabletop), asymmetric safe areas, reserved regions (camera cutouts, hinge/folding region), the four device poses, eight navigation patterns with outer-vs-inner adaptations, ten adaptive app patterns, ten do/don't rules, seven starter templates, and a full component library (status bars, "Liquid Glass" material, panes, split/overlay views, bars, sheets, glyphs). Every numeric value carries a provenance badge (Official / Derived / Recommended / Illustrative / Assumption) so you always know which numbers are real Apple specs and which are this kit's own invention. Full detail lives in [`SKILL.md`](./SKILL.md).

## What's in here

- `SKILL.md` — the skill itself: device configurations, safe areas, reserved regions, poses, navigation patterns, adaptive app patterns, do/don't rules, starter templates, and the component library for iPhone Duo.
- `reference/page-node-map.md` — a map of the source Figma file's pages to node IDs, for re-fetching more detail directly from Figma if needed.
- `bin/install.js` — installer used by `npx iphone-duo-design-skill` (see Setup below).

## Setup

### Option A — install via npm/npx (recommended)

Once published to npm (see "Publishing this package" below), install it into a project with:

```sh
npx iphone-duo-design-skill
```

This copies `SKILL.md` and `reference/` into `./.claude/skills/iphone-duo-design/` in your current directory, where Claude Code auto-discovers project-level skills.

To install it once for every project on your machine instead:

```sh
npx iphone-duo-design-skill --global
```

This installs into `~/.claude/skills/iphone-duo-design/` (Claude Code's user-level skills directory).

### Option B — manual install

Drop this folder into your Claude Skills directory (project-level `.claude/skills/iphone-duo-design/` or user-level `~/.claude/skills/iphone-duo-design/`), or upload it via Claude's skill upload flow.

Either way, Claude Code picks it up automatically — no restart or configuration needed beyond having the files in place.

## Usage

Once installed, just ask Claude (or any agent pointed at `SKILL.md`) to design something for "iPhone Duo," a "foldable iPhone," or a "dual-display iPhone concept" — the skill activates automatically and applies this guidance:

```
Design a Messages app screen for iPhone Duo, outer and inner states.
```

```
What safe-area insets should I use for the inner landscape display on iPhone Duo?
```

Since it's plain Markdown, it also works as a reference doc for any other AI agent or a human designer — just point them at [`SKILL.md`](./SKILL.md).

## Publishing this package (maintainer notes)

This repo is set up as a ready-to-publish npm package (`package.json` + `bin/install.js`), but publishing itself is a one-way, external action, so it isn't done automatically — to publish or update it on npm:

```sh
npm login
npm publish
```

To verify what will be published beforehand:

```sh
npm pack --dry-run
```

Bump `version` in `package.json` before each subsequent `npm publish` (npm rejects re-publishing an existing version).

## Known gap — read before publishing

One page of the source file — **"About"** — could not be fully read while compiling this skill (the Figma connector used hit a rate limit mid-session). That page contains the kit's actual legal/licensing notice and an explicit section on how it relates to real Apple IP ("Referenced, not copied" / "Not included" / "Personal interpretation"). **Open that page yourself** (node ID `3:637`, see `reference/page-node-map.md`) and update the license section below before treating this repo as final or redistributing it widely.

## Status

Extracted in full detail: Start Here, Device Anatomy, Layout Guides → Safe Areas, Starter Templates, Do/Don't rule titles, and the full Components inventory. Structurally mapped but not transcribed verbatim: Navigation and Adaptive Patterns pattern notes, and the rest of Layout Guides (Hinge Area, Reserved Regions, Margins, Columns). See `reference/page-node-map.md` for exact status per page and how to pull anything missing.

## License / attribution

This skill's own text (the Markdown guidance in this repo, `SKILL.md`, `README.md`, the installer script) is licensed under the [MIT License](./LICENSE).

It is *derived from* a third-party Figma community file. **Check that file's own "About" page for its license/attribution terms (see "Known gap" above) before redistributing.** The MIT license here covers only the original writing in this repo — not the original Figma assets, and not any underlying Apple intellectual property.
