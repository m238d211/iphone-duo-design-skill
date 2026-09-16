# Design rules: source-aware Do / Don’t

These are original summaries of the Figma page’s extracted rule titles, not quotations. Classification prevents a useful design rule from being misrepresented as Apple HIG text.

| Rule | Classification | Rationale / source |
|---|---|---|
| Preserve task continuity across configuration changes. | `APPLE_OFFICIAL` | Apple says experiences must remain a single, predictable experience as a device changes pose. `APPLE_DUO_DESIGN` |
| Use added area for meaningful secondary context, not mere stretching. | `REPOSITORY_RECOMMENDED` | A task-based recommendation consistent with Apple’s split/two-column examples, but not asserted as a verbatim Apple rule. |
| Keep important controls away from an active fold/occlusion region. | `APPLE_OFFICIAL` | Apple’s reserved-region and fold-avoidance guidance. `APPLE_DUO_DESIGN`, `APPLE_DUO_ADAPTIVE_LAYOUTS` |
| Let system containers position bars; do not manually relocate system chrome. | `APPLE_OFFICIAL` | Standard bars adapt by display and container context. `APPLE_DUO_PREPARE_APP`, `APPLE_DUO_BARS` |
| Keep control hierarchy and functionality stable while presentation adapts. | `APPLE_OFFICIAL` | Apple asks that special-pose layouts retain controls and general hierarchy. `APPLE_DUO_DESIGN` |
| Keep grid items usable in their available regions; avoid an arbitrary uneven fold split. | `REPOSITORY_RECOMMENDED` | Figma-inspired layout advice; runtime region geometry determines the actual division. |
| Do not displace continuous scrolling content merely because the fold changes. | `APPLE_OFFICIAL` | Apple says articles, feeds, documents, and lists already adapt through scrolling. `APPLE_DUO_ADAPTIVE_LAYOUTS` |
| Resolve every safe-area edge independently. | `APPLE_OFFICIAL` | Duo safe areas can be asymmetric. `APPLE_DUO_PREPARE_APP` |
| Cap/restructure long reading measures on expansive layouts. | `REPOSITORY_RECOMMENDED` | Readability guidance; not a fixed Apple Duo metric. |
| Use the system-managed overflow path for compressed bar actions. | `APPLE_OFFICIAL` | Apple documents system overflow and visibility priority. `APPLE_DUO_BARS` |

The Figma page’s explanatory copy remains unextracted. Do not reconstruct or attribute it as a quote.
