# Compatibility and fallbacks

Last verified: **2026-09-16**.

| Area | Verified state | Fallback |
|---|---|---|
| iPhone Duo product | Announced 2026-09-09; availability shown by Apple as 2026-10-23 | Treat unavailable hardware/simulator as a validation gap, not proof of geometry. |
| iOS/Xcode | Apple’s Duo portal says Xcode 27.1 beta is needed for the full-screen SDK experience and marks it coming later in September | Build flexible layouts against the available SDK; do not compile in unverified Duo symbols. |
| SwiftUI/UIKit Duo APIs | Region, arrangement, hinge, and bar APIs appear in iOS 27.1 Apple materials | Guard availability and retain standard single-pane/safe-area layouts. |
| Multiple scenes/Split View | All apps participate in side-by-side multitasking; Duo supports multiple UI instances. New windows are unavailable on the outer display and available on the inner display. | Use size classes/scene geometry, request scenes through availability-aware UI, handle request errors, and preserve state per scene. |
| Flutter | Flutter documents `MediaQueryData.displayFeatures`, but says it is populated only on Android | On iOS, use size/padding adaptation and a native Swift bridge only for verified Apple-only capabilities. |

Re-check `reference/apple-sources.md` and the final SDK declarations before setting a deployment target or advertising an API as shipping.
