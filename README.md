# iphone-duo-design-skill

A [Claude Skill](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) that packages design guidance for **iPhone Duo** — a conceptual foldable/dual-screen iPhone documented in the Figma community file [iPhone Duo UI/UX](https://www.figma.com/design/A8CGHj3fosazzLjxUN5CtM/iPhone-Duo-UI-UX--Community-).

> **Note:** iPhone Duo is not a real, currently shipping Apple product. This is a speculative/concept design kit styled after Apple's Human Interface Guidelines. See [`SKILL.md`](./SKILL.md) for the provenance system this kit uses to mark which numbers are real Apple values vs. invented ones.

## What's in here

- `SKILL.md` — the skill itself: device configurations, safe areas, reserved regions, poses, navigation patterns, and adaptive app patterns for iPhone Duo.
- `reference/page-node-map.md` — a map of the source Figma file's pages to node IDs, for re-fetching more detail directly from Figma if needed.

## Using this skill

Drop this folder into your Claude Skills directory (or upload it via Claude's skill upload flow), then ask Claude to design something for "iPhone Duo" and it will apply this guidance automatically.

## Status

This is a first pass, extracted from the Figma file's "Start Here," "Device Anatomy," and "Layout Guides" (Safe Areas) pages in full detail, plus structural summaries of "Navigation" and "Adaptive Patterns." A "Components" and "Starter templates" page (per the file's own "what's included" list) were not yet opened — contributions welcome.

## License / attribution

This skill is derived from a third-party Figma community file. Check that file's own license/attribution terms before redistributing its assets; this repo only contains text guidance extracted from it, not the original Figma assets.
