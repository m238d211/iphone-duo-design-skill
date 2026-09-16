# iPhone Duo UI/UX — Figma page map

**Provenance: `COMMUNITY_FIGMA`.** This is a supplementary source index, not Apple platform documentation. Last reviewed: 2026-09-16. See [figma-source.md](figma-source.md) for extraction and licensing limits.

Source file: https://www.figma.com/design/A8CGHj3fosazzLjxUN5CtM/iPhone-Duo-UI-UX--Community-

File key: `A8CGHj3fosazzLjxUN5CtM`

This file does not reliably list its own top-level pages via a bare `get_metadata` call
with no nodeId (it only ever returned the cover page). Page node IDs below were collected
by hand from links shared by the file's owner, opened one at a time.

| Page | Node ID | Status |
|---|---|---|
| Cover | 0:1 | Not design content — community listing thumbnail |
| Start Here | 1:2 | Extracted (overview, "what's included") |
| Device Anatomy | 3:218 | Fully extracted — see SKILL.md |
| Device Frames | 3:629 | Metadata only — 15 device-frame symbols + validity table, summarized in SKILL.md |
| Layout Guides | 3:631 | Safe Areas section fully extracted (exact pt values); Hinge Area, Reserved Regions, Margins/Content Width, Columns sections identified but not transcribed verbatim |
| Navigation | 3:632 | Structure identified (8 patterns: nav bar, tab nav, sidebar, vertical nav, toolbar, split nav, contextual actions, sheets); "what changes/why/build with" text not transcribed verbatim |
| Adaptive Patterns | 3:633 | Structure identified (10 example apps: Feed, Master-Detail, Messaging, Media, Maps, E-commerce, Dashboard, Settings, Calendar, Dark Mode Check); pattern notes not transcribed verbatim |
| Starter Templates | 3:634 | Fully identified — 7 templates (Blank, Master Detail, Sidebar Detail, Feed, Media + Context, Map + Panel, Dashboard), summarized in SKILL.md |
| Do / Don't | 3:635 | 10 rule titles extracted (see SKILL.md); the actual "why" copy under each Do/Don't pair not transcribed verbatim |
| Components | 3:636 | Full component inventory extracted — see SKILL.md "Component library" section |
| About | 3:637 | **Complete** — source-supplied text reviewed on 2026-09-16; legal/attribution boundary, assumptions, and publishing review are summarized in `figma-source.md` and `legal-and-attribution.md`. |

Node IDs seen but not opened as separate pages (likely internal component/section groups within
Components or Device Frames, based on their numeric range): `4:20100`, `4:20296`, `4:21268`,
`3:9431`, `3:12033`, `4:21373`, `4:21412`. Not confirmed — check directly if needed.

## How to re-fetch

With any Figma-connected tool (REST API, an MCP server, or the Figma app directly):

```
get_metadata(fileKey="A8CGHj3fosazzLjxUN5CtM", nodeId="<node id>")       # structure only
get_design_context(fileKey="A8CGHj3fosazzLjxUN5CtM", nodeId="<node id>") # full text + screenshot
```

Priority for a follow-up pass: verbatim text for Navigation (3:632), Adaptive Patterns (3:633),
Layout Guides, and Do / Don’t if exact explanatory copy is needed rather than the current inventory.
