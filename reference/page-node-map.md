# iPhone Duo UI/UX — Figma page map

Source file: https://www.figma.com/design/A8CGHj3fosazzLjxUN5CtM/iPhone-Duo-UI-UX--Community-

File key: `A8CGHj3fosazzLjxUN5CtM`

This file does not reliably list its own top-level pages via the Figma MCP `get_metadata`
call with no nodeId (it only ever returned the cover page). Page node IDs below were
collected by hand from links shared by the file's owner. If you have Figma access,
re-derive these from the page tabs in the left sidebar if any go stale.

| Page | Node ID | Status |
|---|---|---|
| Cover | 0:1 | Not design content — community listing thumbnail |
| Start Here | 1:2 | Extracted (overview, "what's included") |
| Device Anatomy | 3:218 | Fully extracted — see SKILL.md |
| Device Frames | 3:629 | Metadata only — component library (15 device-frame symbols) |
| Layout Guides | 3:631 | Safe Areas section fully extracted; Hinge Area, Reserved Regions, Margins/Content Width, Columns sections identified but not transcribed verbatim |
| Navigation | 3:632 | Structure identified (8 patterns), text notes not transcribed verbatim |
| Adaptive Patterns | 3:633 | Structure identified (10 example apps), text notes not transcribed verbatim |
| (unidentified) | 3:634 | Not yet fetched |
| (unidentified) | 3:635 | Not yet fetched |
| (unidentified) | 3:636 | Not yet fetched |
| (unidentified) | 3:637 | Not yet fetched |
| (unidentified) | 4:20100 | Not yet fetched |
| (unidentified) | 4:20296 | Not yet fetched |
| (unidentified) | 4:21268 | Not yet fetched |
| (unidentified) | 3:9431 | Not yet fetched |
| (unidentified) | 3:12033 | Not yet fetched |
| (unidentified) | 4:21373 | Not yet fetched |
| (unidentified) | 4:21412 | Not yet fetched |

Per the "Start Here" page's "What's included" inventory, the kit advertises: device frames,
layout guides, navigation patterns, adaptive patterns, components, and starter templates.
The unidentified node IDs above likely cover "Components" and "Starter templates," which
were not opened in this pass — fetch them with `get_metadata` (structure) then
`get_design_context` (full text + screenshot) to fill this out.

## How to re-fetch

With the Figma MCP connector enabled:

```
get_metadata(fileKey="A8CGHj3fosazzLjxUN5CtM", nodeId="<node id>")   # structure only
get_design_context(fileKey="A8CGHj3fosazzLjxUN5CtM", nodeId="<node id>")  # full text + screenshot
```
