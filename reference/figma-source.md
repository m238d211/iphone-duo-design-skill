# Figma Community source

This source is supplementary. It cannot override Apple specifications, runtime behavior, or API documentation.

- File name: **iPhone Duo UI/UX**
- File key: `A8CGHj3fosazzLjxUN5CtM`
- URL: https://www.figma.com/design/A8CGHj3fosazzLjxUN5CtM/iPhone-Duo-UI-UX--Community-
- Extraction date: original pages pre-V2; About page content supplied for this repository update and reviewed 2026-09-16
- Current page map: [page-node-map.md](page-node-map.md)

## Extracted material

The repository has a page-level inventory of Device Anatomy, Device Frames, Layout Guides (safe-area values only), Navigation pattern names, Adaptive Pattern names, Starter Templates, Do/Don’t rule titles, Components inventory, and the About page’s legal/assumption text. These inform visual vocabulary and community recommendations, not platform facts.

The About page identifies the file as a free, unofficial community resource and a personal effort by **Ahmed Majid**, version 1.0 (September 2026). It says the file is not made, reviewed, endorsed by, affiliated with, or an official specification/template of Apple; it is an interpretation of public guidance. The source attribution is Ahmed Majid / [babil-it.com](https://babil-it.com). The social handles shown in the source are retained only in the detailed attribution record: Instagram and X, `@od_331`.

## Incomplete material

- Layout Guides: hinge area, reserved regions, margins/content width, and columns explanatory text were not transcribed.
- Navigation and Adaptive Patterns: their exact “what changes / why / build with” copy was not transcribed.
- Do/Don’t explanatory copy was not transcribed.
- The granular node index has no substantiated child IDs; unresolved entries are `null`.

## Assumptions and measurement boundary

The About page says logical sizes assume 3× scale and lists an inner `951 × 669 pt` value derived from an App Store Connect screenshot (`2853 × 2007 px`). It also names a `2670 × 1878 px` panel, which is the landscape ordering of Apple’s verified `1878 × 2670 px` panel. The screenshot pixels used for the derivation do not match that Apple panel resolution. Therefore `951 × 669 pt` remains `COMMUNITY_FIGMA`, `runtimeConstant: false`, and unsuitable for device detection or layout bounds.

It identifies safe-area insets, the 94 pt vertical bar, and the 27 pt folding band as kit values measured from HIG images; camera geometry and corner radii are illustrative. It asks maintainers to verify the outer-landscape bar side in the simulator. Its values labelled Derived, Recommended, or Assumption are the Figma author’s interpretation, not Apple official values.

## Apple resource review disclosed by the Figma source

The following statements are the Figma author’s disclosure about that source file; they are not independent legal findings by this repository.

| Source disclosure | Reported content |
|---|---|
| Referenced, not copied | A 23-variable Light/Dark iOS-system-color subset; typography sizes, leading, tracking, and weights; margins/status-bar/sheet/menu/bar dimensions; and one private Liquid Glass recipe interpreted and rebuilt in the file. |
| Not included | Apple components, instances, library links, product bezels, SF fonts, SF Symbols artwork, and Apple documentation pages or graphics. |
| Personal interpretation | Non-official Derived/Recommended/Assumption values; Universal Icon Set v2.0 by 123done icons renamed after matching SF Symbols; and underscore-prefixed mock controls that mimic iOS controls only. |

## Usage and attribution boundary

Treat all extracted measurements as `COMMUNITY_FIGMA` unless a separate Apple source proves the same fact. The About page supplies source intent and attribution, but does not state a reusable license grant for Figma assets. Do not infer that Figma assets or third-party assets are MIT-licensed. The source author says the file will be updated when Apple releases Duo design resources and the Xcode 27.1 simulator; re-check it before a release.
