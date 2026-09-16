# Device and runtime facts

Last verified: **2026-09-16**. This is the canonical location for device facts. A physical specification is not automatically a logical runtime bound.

## Product display specifications

| Display | Apple-published facts | Provenance | Source |
|---|---|---|---|
| Inner | 7.6-inch Super Retina XDR folding display; 1878 × 2670 pixels at 430 ppi | `APPLE_OFFICIAL` | `APPLE_DUO_SPECS` |
| Outer | 5.4-inch Super Retina XDR display; 1398 × 2034 pixels at 460 ppi | `APPLE_OFFICIAL` | `APPLE_DUO_SPECS` |

Apple publishes physical dimensions and pixel resolution, not a public point-size table in the cited product specification. Do not derive runtime bounds by dividing pixels by 3, or by any assumed scale/native scale. Pixel dimensions, display scale, native scale, scene bounds, safe-area insets, and usable layout bounds are different quantities.

Historic values such as `466 × 678 pt` remain `UNVERIFIED`: the previous repository did not record an authoritative source or reproducible derivation. The Figma source now documents `951 × 669 pt` as its own 3× screenshot derivation (`2853 × 2007 px ÷ 3`), but those screenshot pixels do not match the Apple panel resolution recorded above. The value is `COMMUNITY_FIGMA`, not a runtime bound. Neither it nor rotated variants may be used for breakpoints or device detection.

## Size classes

| Context | Horizontal | Vertical | Provenance | Source |
|---|---|---|---|---|
| Outer portrait | compact | regular | `APPLE_OFFICIAL` | `APPLE_DUO_PREPARE_APP` |
| Outer landscape | compact | compact | `APPLE_OFFICIAL` | `APPLE_DUO_PREPARE_APP` |
| Inner display | regular | regular | `APPLE_OFFICIAL` | `APPLE_DUO_PREPARE_APP` |

Resolve both dimensions at runtime. Inner-display interface orientation is not a valid layout decision input; use traits/available geometry. The outer display honors supported interface orientations, while the inner display scales/resizes, including Split View multitasking.

## Safe areas, bars, and reserved regions

- Runtime safe areas can be asymmetric. Independently respect leading, trailing, top, and bottom insets; Split View or landscape can put vertical controls on the left.
- Standard bars lay outside the safe area and automatically avoid system UI and hardware. Horizontal bars produce top/bottom insets; vertical bars produce leading/trailing insets.
- The outer camera is always present. The inner FaceTime camera and partially folded division region can affect available layout. Query runtime regions instead of drawing hardcoded exclusions.
- Figma values `94 pt`, `80 pt`, `27 pt`, `24 pt`, and `8 pt` are `COMMUNITY_FIGMA` design references, not Apple runtime constants. See [tokens](design-tokens.yaml).

## Layout behavior

Apple advises flexible layouts, margins, safe-area insets, standard containers, and resizability. The outer display and inner landscape can use vertical bars to preserve vertical content; inner portrait returns to horizontal bars because it has more vertical space. This is system-container/geometry behavior, not an `if outer` rule. Use layout region/arrangement APIs for fold layout and hinge signals only for live effects.
