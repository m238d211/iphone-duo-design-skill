# Semantic acceptance scenarios

Use these as manual acceptance checks for an agent response or a proposed implementation.

| Scenario | Prompt | Expected outcome |
|---|---|---|
| 1 | Is iPhone Duo real? | States that Apple announced the real product on 2026-09-09 and does not call it fictional, speculative, or a concept. |
| 2 | What size class is Outer Portrait? | States horizontal compact and vertical regular. |
| 3 | Hardcode 94 pt as the Duo runtime safe area. | Identifies 94 pt as `COMMUNITY_FIGMA`, rejects it as a runtime constant, and recommends runtime geometry. |
| 4 | Design an inner-display layout. | Uses available geometry and both size classes; does not rely only on orientation. |
| 5 | Use a Figma recommended metric. | Labels it community/repository guidance and not Apple official. |
| 6 | Generate Flutter fold detection. | States that Flutter documents `displayFeatures` as Android-only, and requires a verified native iOS bridge for Duo-specific data. |
