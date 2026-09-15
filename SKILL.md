---
name: iphone-duo-design
description: Design and UI guidance for "iPhone Duo," a conceptual foldable/dual-screen iPhone (NOT a real shipping Apple product — this is a speculative/community design kit styled after Apple's Human Interface Guidelines). Use this skill whenever the user asks to design, mock up, or build a UI/UX for iPhone Duo, a foldable iPhone, or any dual-display iPhone concept — including layouts, navigation patterns, safe areas, device frames, or adaptive app patterns for this device. Also use it if the user references "Duo System," device poses (Flat, Folded like a book, Propped on a surface, Standing on its edges), or configurations like Outer/Inner Portrait/Landscape, Partial Book, or Partial Tabletop.
---

# iPhone Duo Design Skill

## What this is

This skill packages design specifications from a Figma community file ("iPhone Duo UI/UX") that imagines a foldable/dual-screen iPhone and documents how to design for it, in the style of Apple's Human Interface Guidelines (HIG).

**Important — read this before using anything below:** iPhone Duo is **not a real, currently shipping Apple product**. This kit is a well-produced speculative/concept design system. Every numeric value in the kit carries a provenance badge:

| Badge | Meaning |
|---|---|
| **Official** | Stated by Apple (in the *real* iPhone/iPadOS HIG, applied to this concept) |
| **Derived** | Computed from official numbers |
| **Recommended** | This kit's own design value (not from Apple) |
| **Illustrative** | Visual only, not a spec |
| **Assumption** | Unverified guess |

When using this skill, be transparent with the user that this is a concept/fan-made design system, not real Apple guidance — especially if they plan to publish or present it as authoritative.

## When to use this skill

Use this skill when the user wants to:
- Design screens, mockups, or wireframes for the iPhone Duo concept device
- Build a UI that adapts between "outer" (closed, small) and "inner" (open, large, dual-pane) displays
- Understand safe areas, hinge regions, or reserved regions (camera cutouts) for a foldable iPhone
- Pick an appropriate navigation pattern (nav bar, tab bar, sidebar, split view, etc.) for outer vs. inner display
- Reference device poses (Flat, Book-fold, Propped, Standing) when designing layouts

## Device configurations (six states)

| Configuration | Description | Logical size | Resolution | Size class | Provenance |
|---|---|---|---|---|---|
| Outer Portrait | Device closed, held upright | 466 × 678 pt | 1398 × 2034 px | Compact | Resolution/size class: Official; logical size: Derived |
| Outer Landscape | Device closed, sideways | 678 × 466 pt | 2034 × 1398 px | Compact | Official (vertical bar side: Assumption) |
| Inner Portrait | Device open, upright | 669 × 951 pt | 1878 × 2670 px | Regular × Regular | Official (hinge line position: Derived) |
| Inner Landscape | Device fully open (natural posture) | 951 × 669 pt | 2670 × 1878 px | Regular × Regular | Official |
| Partial Book | Inner display, folded partway like a book | 951 × 669 pt | — | — | Official (logical size: Derived) |
| Partial Tabletop | Inner display, propped on a surface | 669 × 951 pt | — | — | Official |

Standing the device on its edges uses the same sizes/rules as its base configuration — it doesn't need its own layout.

### Outer display
Used when the device is closed. It's wider and shorter than a normal iPhone display, so the system moves the status bar and control bars to the **side** (vertical), not the top, to preserve vertical space for content.
- A round camera cutout is always present in the top corner (reserved region).
- Vertical controls (back, prominent action, toolbar groups, tab bar) stack top-to-bottom in a **94 pt wide vertical bar**.

### Inner display
Used when open. Regular×Regular size class leaves room for sidebars and two panes (leading/trailing). In landscape, controls stay on the side (matching the outer display's convention) rather than moving to the top.
- Hidden inner camera sits under the display; when active, content moves aside for it.
- Leading pane = list/sidebar/primary view. Trailing pane = detail/secondary view.

## Safe areas (Layout Guides page)

A safe area is the part of the screen not covered by hardware or system UI. On iPhone Duo it's **asymmetric** — read every inset independently, never assume left equals right.

| Region | Value | Provenance |
|---|---|---|
| Outer, top and bottom | 8 pt | Recommended |
| Outer, trailing (vertical bar) | 94 pt | Recommended |
| Inner portrait, top (status bar) | 80 pt | Recommended (kit value) |
| Inner portrait, bottom | 24 pt | Recommended |
| Inner landscape, trailing (vertical bar) | 94 pt | Recommended |
| Leading inset, all states | 0 pt | Assumption |

Rules:
- Let backgrounds/images run to the screen edges; keep text and controls inside the safe area.
- In Split View multitasking, each app places controls on its own outer edge — so the *opposite* edge can carry an inset too.
- Apple has not published an official Duo margins/safe-area template — every value above is a starting point from this kit ("Duo System"), not verified Apple guidance.

## Reserved regions

- **Outer camera**: always present, round cutout in the top corner of the outer display.
- **Inner camera**: hidden until active; UI moves aside for it when it activates.
- **Folding region**: zero width when flat; when partially open it splits the display and excludes the center (the fold itself).

## Poses

Apple's guidance (per this kit) is to design for **size classes, not for each pose** — reserved regions should shape the layout, not the specific way someone is holding the device.

| Pose | Behavior |
|---|---|
| Flat | Division region has zero width and is inactive — treat the display as one surface |
| Folded like a book | Hinge divides the inner display into two usable regions; content spanning the fold is harder to see |
| Propped on a surface | Top region = content viewed at a distance; bottom region = interactive controls |
| Standing on its edges | Same size classes as other poses apply — no separate layout needed |

## Navigation patterns (Navigation page)

The kit documents outer-vs-inner adaptations for 8 navigation patterns. For each, the design shows an **Outer** state and an **Inner** state side by side with notes on "what changes," "why," and "build with" (framework/API hints):

1. Navigation bar — outer: list view in vertical-bar layout; inner: navigation bar + system chrome above, tab bar below
2. Tab navigation — outer: tab bar; inner: tabs promoted to a sidebar
3. Sidebar — outer: single pane; inner: sidebar + content pane
4. Vertical navigation — outer: stacked rows; inner: split view
5. Toolbar — outer: single article view; inner: same, wider article pane
6. Split navigation — outer: single pane; inner: split view
7. Contextual actions — outer: context menu overlay; inner: context menu within split view, hinge band shown
8. Sheets — outer: full-height sheet with dimming; inner: centered sheet within split view

**When reading this skill, treat this list as an inventory of what exists in the source file, not verbatim rule text** — if you need the exact "what changes / why" wording for a specific pattern, fetch it live from the Figma file (see "Going further" below) rather than inventing it.

## Adaptive app patterns (Adaptive Patterns page)

The kit shows 10 worked examples of real app types adapting between outer (closed) and inner (open) states — useful as references for how a given app category should restructure:

1. Feed — outer: single-column story cards; inner: two-column feed + supporting panel
2. Master-Detail — outer: list only; inner: list pane + detail pane
3. Messaging — outer: single conversation thread; inner: conversation list + active conversation
4. Media (music/video player) — outer: player only; inner: player pane + context pane (up next / related)
5. Maps — outer: map + place card; inner: place panel (search + list) + map area
6. E-commerce — outer: single-column product grid; inner: catalog pane + product detail pane
7. Dashboard — outer: stacked metrics + one chart; inner: metrics row + two charts side by side
8. Settings — outer: single settings list; inner: settings sidebar + detail pane
9. Calendar — outer: agenda list; inner: agenda pane + event detail pane (with hinge gutter)
10. Dark Mode Check — a dark-mode rendering of a messaging app, used to sanity-check the pattern in dark mode

## Component library

The kit includes a "Device Frames" page with 15 reusable device-frame components (combinations of Display=Outer/Inner × Orientation=Portrait/Landscape × Fold=Folded/Unfolded/Partial × Presentation=Device/Screen Only/Guides), plus properties (Display, Orientation, Fold, Presentation, Content, Show System Chrome) and a validity table of which combinations are real states.

## Going further / re-fetching live data

This skill was compiled from a live Figma file via the Figma MCP connector. If you need exact pixel-level detail beyond what's summarized here (e.g. verbatim copy from the Navigation or Adaptive Patterns pages, or the Components/Starter templates pages not yet summarized), fetch it directly:

- File key: `A8CGHj3fosazzLjxUN5CtM`
- Use `get_design_context` or `get_metadata` with the relevant node ID from `reference/page-node-map.md`

See `reference/` for the full page inventory and any additional extracted detail.
