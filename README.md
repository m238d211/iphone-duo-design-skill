# iphone-duo-design-skill

A [Claude Skill](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) — and, since it's plain Markdown with no vendor-specific instructions, usable as reference material by any AI coding/design agent — that packages design guidance for **iPhone Duo**, a conceptual foldable/dual-screen iPhone documented in the Figma community file [iPhone Duo UI/UX](https://www.figma.com/design/A8CGHj3fosazzLjxUN5CtM/iPhone-Duo-UI-UX--Community-).

> **Note:** iPhone Duo is not a real, currently shipping Apple product. This is a speculative/concept design kit styled after Apple's Human Interface Guidelines. See [`SKILL.md`](./SKILL.md) for the provenance system this kit uses to mark which numbers are real Apple values vs. invented ones.

## What's in here

- `SKILL.md` — the skill itself: device configurations, safe areas, reserved regions, poses, navigation patterns, adaptive app patterns, do/don't rules, starter templates, and the component library for iPhone Duo.
- `reference/page-node-map.md` — a map of the source Figma file's pages to node IDs, for re-fetching more detail directly from Figma if needed.

## Using this skill

Drop this folder into your Claude Skills directory (or upload it via Claude's skill upload flow), then ask Claude to design something for "iPhone Duo" and it will apply this guidance automatically. It's plain Markdown, so it also works as a reference doc for any other AI agent or human designer — just point them at `SKILL.md`.

## Known gap — read before publishing

One page of the source file — **"About"** — could not be fully read while compiling this skill (the Figma connector used hit a rate limit mid-session). That page contains the kit's actual legal/licensing notice and an explicit section on how it relates to real Apple IP ("Referenced, not copied" / "Not included" / "Personal interpretation"). **Open that page yourself** (node ID `3:637`, see `reference/page-node-map.md`) and update the license section below before treating this repo as final or redistributing it widely.

## Status

Extracted in full detail: Start Here, Device Anatomy, Layout Guides → Safe Areas, Starter Templates, Do/Don't rule titles, and the full Components inventory. Structurally mapped but not transcribed verbatim: Navigation and Adaptive Patterns pattern notes, and the rest of Layout Guides (Hinge Area, Reserved Regions, Margins, Columns). See `reference/page-node-map.md` for exact status per page and how to pull anything missing.

## License / attribution

This skill is derived from a third-party Figma community file. **Check that file's own "About" page for its license/attribution terms (see "Known gap" above) before redistributing.** This repo only contains text guidance extracted from it, not the original Figma assets.
