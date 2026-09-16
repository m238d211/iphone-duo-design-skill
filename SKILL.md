---
name: iphone-duo-design
description: Design and implementation guidance for Apple iPhone Duo. Use for iPhone Duo layouts, fold-aware interfaces, dual-display navigation, safe or reserved regions, adaptive SwiftUI/UIKit/Flutter work, and reviews of Duo UI. Apple documentation is canonical; the included Figma Community material is supplementary only.
---

# iPhone Duo Design Skill

## Purpose

iPhone Duo is Apple’s foldable iPhone, announced on September 9, 2026. This skill helps designers and developers create adaptive experiences without confusing Apple platform facts with the supplementary Figma Community design system or repository-authored advice.

Do not present this repository as Apple documentation. For platform behavior, follow the source hierarchy below and cite the source IDs used in an answer.

## Use this skill when

- Designing, reviewing, or implementing an iPhone Duo experience.
- Adapting a phone screen to a resizable, inner, outer, partially folded, or Split View context.
- Working with Duo navigation, safe areas, reserved regions, hinge behavior, scenes, or cameras.

## Source hierarchy and provenance

1. `APPLE_OFFICIAL` — Apple Developer documentation, HIG, videos, and API references.
2. `APPLE_DERIVED` — reproducible calculation using a recorded Apple source; never a runtime guarantee.
3. `COMMUNITY_FIGMA` — supplementary source-file content and measurements.
4. `REPOSITORY_RECOMMENDED` — original guidance in this repository.
5. `ILLUSTRATIVE` — example-only visual content.
6. `ASSUMPTION` — a stated but unverified working premise.
7. `UNVERIFIED` — a claim or gap awaiting a specific source.

Only a value with a specific Apple source ID may be `APPLE_OFFICIAL`. Never treat a Figma measurement, a pixel-to-point division, or a device model check as a runtime contract. See [source registry](reference/apple-sources.md), [device facts](reference/device-facts.md), and [tokens](reference/design-tokens.yaml).

## Core rules

- Use window geometry, horizontal and vertical size classes, safe areas, and reserved regions independently. Do not design from a device-model name, a fixed screen size, or inner-display orientation alone.
- Outer portrait is horizontal compact / vertical regular; outer landscape is compact / compact; the inner display is regular / regular. See [device facts](reference/device-facts.md).
- Keep foreground controls in runtime safe areas. Backgrounds may extend behind system containers. Treat each edge independently because Duo geometry can be asymmetric.
- Prefer standard navigation, bars, sheets, menus, split views, and arrangements so the system can adapt them around bars, cameras, and folds.
- A fold, rotation, resize, display switch, or Split View change must preserve domain state, navigation, selection, and useful scroll position.
- Keep important controls out of a partially folded division region. Use region/arrangement APIs for layout, not hinge-angle events.
- Design for Dynamic Type, VoiceOver, Reduce Motion/Transparency, contrast, keyboard/focus, RTL, and localization expansion.

## Decision procedure

For a Duo task, determine: platform/framework; active window or scene geometry; both size classes; safe and reserved regions; navigation/container; pane roles; whether displacement or an arrangement is needed; continuity/state handling; fold avoidance; accessibility and RTL; and the official, community, and unresolved inputs. Then give implementation guidance with fallbacks.

## Choose the detailed guide

- [New screen workflow](workflows/new-screen.md) — new UX or mockups.
- [Adaptive-layout workflow](workflows/adaptive-layout.md) — migrate an existing screen.
- [Design review](workflows/design-review.md) or [implementation review](workflows/implementation-review.md) — audit work.
- [SwiftUI](platforms/swiftui.md), [UIKit](platforms/uikit.md), or [Flutter](platforms/flutter.md) — framework-specific guidance.
- [API index](reference/api-index.md), [design rules](reference/design-rules.md), [accessibility and RTL](reference/accessibility.md), [Figma source](reference/figma-source.md), [legal and attribution](reference/legal-and-attribution.md), and [compatibility](reference/compatibility.md) — detailed references.

## Output contract

For design work, cover as relevant: target configuration; window/size-class context; task; navigation and pane roles; reserved/fold regions; safe-area and bar strategy; continuity; accessibility; sources; community recommendations; assumptions; and implementation notes.

For implementation work, cover as relevant: framework and minimum SDK; verified APIs; runtime-geometry strategy; state and fallback behavior; accessibility; device states to verify; sources; and assumptions. This is a completeness checklist, not a requirement to pad simple answers.

## Uncertainty and publishing

If Apple does not publish a fact or API, mark it `UNVERIFIED` rather than filling the gap. The Figma About page confirms that it is unofficial and supplies no reusable asset license; detailed node/text extraction remains incomplete. Do not claim rights to those assets. Re-verify Apple, Flutter, and Figma sources before a release; the current repository verification date is 2026-09-16.
