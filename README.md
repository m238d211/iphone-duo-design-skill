# iPhone Duo Design Skill

> Technology-neutral adaptive design and implementation guidance for Apple iPhone Duo.

[![License: MIT](https://img.shields.io/badge/License-MIT-1f6feb.svg)](LICENSE)
[![Agent Skill](https://img.shields.io/badge/Agent-Skill-5b21b6.svg)](SKILL.md)
[![Technology Neutral](https://img.shields.io/badge/Technology-Neutral-0f766e.svg)](#technology-neutrality)
[![Apple Guidance](https://img.shields.io/badge/Apple-Guidance-475569.svg)](reference/apple-sources.md)
[![Last Verified](https://img.shields.io/badge/Last%20verified-2026--09--16-64748b.svg)](#source-freshness)

> [!IMPORTANT]
> This is an unofficial, community-maintained project. It is not affiliated with, reviewed by, sponsored by, or endorsed by Apple. Apple public documentation is the canonical authority for Apple platform behavior; the associated Figma Community resource is supplementary material.

A reusable agent skill and reference system for designing, reviewing, and implementing interfaces that adapt correctly to iPhone Duo. It combines verified Apple guidance, an unofficial community design reference, provenance-aware rules, reusable workflows, and optional implementation mappings — without requiring a programming language, framework, or AI vendor.

**Navigate:** [Overview](#overview) · [Authority model](#authority-model) · [Capabilities](#capabilities) · [Quick start](#quick-start) · [Usage](#usage) · [Architecture](#repository-architecture) · [Provenance](#provenance) · [Credits](#maintainers-and-credits) · [Legal](#legal-and-trademarks)

## Overview

Use this project when a designer, engineer, reviewer, or AI coding agent needs to make an iPhone Duo interface adapt to available geometry rather than assumptions about a device frame. It helps with layout decisions, navigation, safe and reserved regions, continuity, accessibility, and source provenance.

`SKILL.md` is intentionally a compact router. It selects only the workflow, reference, and optional implementation mapping needed for a task; it is not an encyclopedia to load wholesale.

### What this project is not

- Not an official Apple design kit, SDK, HIG replacement, simulator, or Apple-provided skill.
- Not tied to a single programming language, framework, AI vendor, or app architecture.
- Not a replacement for verifying final SDK availability or testing on actual hardware and simulators.
- Not permission to treat community design measurements as Apple runtime constants.

## Authority model

```text
Apple official public documentation
              ↓
Canonical platform authority
              ↓
Figma Community design resource
              ↓
Supplementary visual/design interpretation
              ↓
Repository guidance
              ↓
Technology-neutral recommendations
              ↓
Derived values and assumptions
              ↓
Explicitly labelled; never silently authoritative
```

If Apple guidance conflicts with this repository or the Figma resource, Apple wins. The authoritative source IDs and verification dates live in the [Apple source registry](reference/apple-sources.md).

## Capabilities

| Area | Helps answer |
|---|---|
| Adaptive geometry | How should outer/inner display space and pane roles change? |
| Size classes | What should horizontal and vertical space independently enable? |
| Fold-aware design | How should reserved, division, and occlusion regions affect layout? |
| Navigation | When should a task use single-pane, split, sidebar, sheets, or adaptive bars? |
| Continuity | Which navigation, selection, input, and scroll state must survive geometry changes? |
| Safe areas | Which constraints belong to runtime geometry rather than fixed design measurements? |
| Accessibility | How should Dynamic Type, VoiceOver, motion, transparency, contrast, and focus behave? |
| Internationalization | How should RTL and localization expansion affect asymmetric layouts? |
| Scenes and displays | What changes for Split View, scene geometry, and multiple instances? |
| Implementation | How should the current project stack map verified concepts, native bridges, or fallbacks? |
| Review | Which geometry, continuity, accessibility, and provenance risks remain? |
| Provenance | Is a value official, derived, community-supplied, recommended, illustrative, assumed, or unverified? |

## Technology neutrality

The skill does not choose a language or framework for a project.

| Task context | Expected behavior |
|---|---|
| Existing project | Preserve its stack and architecture. |
| Explicit framework request | Use that framework only after verifying its relevant APIs. |
| Design-only work | Stay implementation-neutral. |
| Missing capability | Describe a verified interoperability boundary, native bridge, or fallback. |
| Unsupported API | State the limitation; never invent an API. |

The [SwiftUI](platforms/swiftui.md), [UIKit](platforms/uikit.md), and [Flutter](platforms/flutter.md) files are examples of optional mappings, not a fixed supported-technology list or migration requirement.

## How the skill works

```text
User task
   ↓
SKILL.md
   ↓
Relevant workflow
   ↓
Only the required references
   ↓
Optional implementation mapping
   ↓
Validation and provenance check
```

The normal decision model is:

1. Understand the task and active window/scene context.
2. Resolve official Duo constraints and runtime geometry.
3. Select an adaptive navigation and pane pattern.
4. Preserve continuity while presentation changes.
5. Map to the project’s existing technology only when implementation is required.
6. Verify API availability, accessibility, RTL, localization, and provenance.
7. Report unresolved assumptions instead of treating them as facts.

Detailed procedures: [new screen](workflows/new-screen.md), [adaptive layout](workflows/adaptive-layout.md), [design review](workflows/design-review.md), and [implementation review](workflows/implementation-review.md).

## Quick start

### Current checkout or manual installation

This repository does not claim its npm package is currently published. Use the current checkout directly, copy it into the skill location expected by an agent host, or point an agent at [SKILL.md](SKILL.md).

For a Claude-compatible project-local layout:

```sh
mkdir -p .claude/skills
cp -R /path/to/iphone-duo-design-skill .claude/skills/iphone-duo-design
```

### Package installation when a release is available

```sh
npx iphone-duo-design-skill --dry-run
npx iphone-duo-design-skill
npx iphone-duo-design-skill --global
```

The installer copies `SKILL.md`, `reference/`, `platforms/`, and `workflows/` to `.claude/skills/iphone-duo-design/`, or to `~/.claude/skills/iphone-duo-design/` with `--global`.

### Installer options

| Flag | Purpose |
|---|---|
| `--global`, `-g` | Install to the user-level Claude skills directory. |
| `--dry-run` | Print the pending install or removal without writing files. |
| `--backup` | Rename an existing installation to a dated backup before replacement. |
| `--force` | Replace an existing installation. |
| `--uninstall` | Remove only this skill installation. |
| `--help`, `-h` | Show installer help. |

Existing installations are never replaced unless `--backup` or `--force` is explicit.

## Usage

```text
Review this screen for iPhone Duo and identify safe-area, fold, and continuity risks.
```

```text
Adapt this phone layout from a compact outer display to the inner display.
```

```text
Find reserved-region problems in this UI and propose an adaptive navigation model.
```

```text
Implement this adaptive layout using the framework already used by this project.
```

```text
Is this 94 pt Figma value an Apple runtime constant? Show its provenance.
```

```text
Review this implementation for state loss when window geometry changes.
```

## Provenance

| Provenance | Meaning | Authority |
|---|---|---|
| `APPLE_OFFICIAL` | Directly verified Apple source fact | Highest |
| `APPLE_DERIVED` | Reproducible derivation from Apple data | Derived, not automatically runtime-safe |
| `COMMUNITY_FIGMA` | Community design-source value or interpretation | Supplementary |
| `REPOSITORY_RECOMMENDED` | Repository-authored practice | Advisory |
| `ILLUSTRATIVE` | Example-only visual material | Non-normative |
| `ASSUMPTION` | Explicit but unverified premise | Validate before relying on it |
| `UNVERIFIED` | Known gap or unconfirmed claim | Do not promote to fact |

`APPLE_OFFICIAL` requires a registered source ID. The machine-readable [design tokens](reference/design-tokens.yaml) record provenance, source IDs, dates, derivations, and runtime-constant status.

### Why one metric needs provenance

The Figma `94 pt` vertical-bar measurement is `COMMUNITY_FIGMA`, not a universal Apple runtime constant. App layout must instead use runtime/platform geometry. This distinction is deliberate: a familiar-looking design value is not evidence of an operating-system guarantee.

## Figma Community source

| Item | Detail |
|---|---|
| Original resource | [iPhone Duo UI/UX](https://www.figma.com/design/A8CGHj3fosazzLjxUN5CtM/iPhone-Duo-UI-UX--Community-) |
| Creator | Ahmed Majid |
| Website | [babil-it.com](https://babil-it.com) |
| Version | 1.0 — September 2026 |
| Role here | Supplementary visual/design interpretation |

The source describes itself as a free, unofficial community resource created to explore adaptive iPhone Duo layouts. It is not made, reviewed, affiliated with, or endorsed by Apple. Its derived, recommended, and assumption values remain non-official.

<details>
<summary>Figma assumption summary</summary>

- `951 × 669 pt` derives from a `2853 × 2007 px` screenshot at an assumed 3× scale; it is not a runtime bound.
- `2670 × 1878 px` is listed separately as Tech Specs panel data; it is the landscape ordering of Apple’s verified `1878 × 2670 px` panel.
- Safe-area values, the `94 pt` vertical bar, and the `27 pt` folding band are Figma-kit measurements from HIG imagery, not Apple runtime constants.
- Camera geometry and screen-corner radii are illustrative; the outer-landscape bar side still requires simulator confirmation.

</details>

See [Figma source details](reference/figma-source.md), [device facts](reference/device-facts.md), and the [page/node map](reference/page-node-map.md).

## Apple sources

Apple public documentation is the canonical authority for Apple facts in this repository. The source registry covers Apple product/technical specifications, Human Interface Guidelines, Apple Developer documentation, iPhone Duo Tech Talks, and relevant SDK/API guidance.

Use the [Apple source registry](reference/apple-sources.md) before promoting any new fact to `APPLE_OFFICIAL`.

## Repository architecture

```text
.
├── SKILL.md        Agent routing, policy, and output contract
├── reference/      Facts, sources, provenance, legal analysis, and review criteria
├── platforms/      Optional framework mappings
├── workflows/      Reusable task procedures
├── scripts/        Dependency-free static validation
├── bin/            Installer
├── NOTICE.md       Concise trademark and third-party notice
└── LICENSE         MIT grant with a separate scope notice
```

### Important files

| Path | Responsibility |
|---|---|
| [SKILL.md](SKILL.md) | Agent routing and invariant behavior. |
| [reference/apple-sources.md](reference/apple-sources.md) | Canonical Apple source registry. |
| [reference/device-facts.md](reference/device-facts.md) | Verified device facts and runtime-boundary cautions. |
| [reference/api-index.md](reference/api-index.md) | Verified platform primitive/API index. |
| [reference/design-tokens.yaml](reference/design-tokens.yaml) | Provenance-aware metrics. |
| [reference/figma-source.md](reference/figma-source.md) | Figma source status, assumptions, and attribution. |
| [reference/legal-and-attribution.md](reference/legal-and-attribution.md) | Canonical detailed rights/provenance record. |
| [workflows/](workflows/) | Reusable design and implementation procedures. |

## Validation

```sh
npm run validate
npm run validate:sources
node --check bin/install.js
npm pack --dry-run
```

`validate` checks required files, frontmatter, authority wording, the canonical MIT text, and stale About-page blocker language. `validate:sources` checks provenance enums and source references. These are static checks; they do not replace runtime, simulator, hardware, backend, or accessibility validation.

## Source freshness

**Last verified: 2026-09-16.**

Apple documentation, SDK availability, framework capabilities, Figma content, and real-device behavior can change. Revalidate before promoting a fact to `APPLE_OFFICIAL` or presenting a capability as shipping.

## Contributing

Before proposing a change:

1. Identify its provenance and prefer primary Apple sources for Apple facts.
2. Do not invent APIs or convert a community value into an official fact.
3. Preserve technology neutrality and avoid local/private project context.
4. Update source records when a new official claim is introduced.
5. Run the documented validation commands.

## Maintainers and credits

| Role | Credit |
|---|---|
| Repository owner / maintainer | [@m238d211](https://github.com/m238d211) |
| Repository-authored MIT copyright notice | Mahmoud, as identified in [LICENSE](LICENSE) |
| Original Figma Community design resource | Ahmed Majid — [babil-it.com](https://babil-it.com) |
| Platform documentation and trademarks | Apple Inc. |
| Other third-party materials | Respective owners; see [NOTICE.md](NOTICE.md) and [legal attribution](reference/legal-and-attribution.md) |

Repository ownership, Figma authorship, Apple intellectual property, and the MIT copyright notice are intentionally separate concepts. The public Figma social handles are retained only in the detailed attribution record.

## Legal and trademarks

This is an unofficial project. Apple, iPhone, iOS, and related marks are trademarks of Apple Inc.; Apple documentation and assets remain Apple intellectual property. This repository grants no rights in Apple IP.

The [MIT License](LICENSE) applies only to repository-authored material that its copyright holder has authority to license. Figma-derived and other third-party material remains subject to its own applicable rights. Read [NOTICE.md](NOTICE.md) for concise public notices and [legal and attribution](reference/legal-and-attribution.md) for the detailed record.

## License

[MIT](LICENSE) for repository-owned material, subject to the separate third-party scope notices above.
