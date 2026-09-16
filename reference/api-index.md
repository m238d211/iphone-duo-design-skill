# API index

Availability is based on Apple’s 2026-09-16 Duo materials. Several Duo APIs are introduced with **iOS 27.1 / Xcode 27.1 beta** in those materials; verify the final SDK declaration before shipping.

| Category | API / symbol | Framework | Availability status | Guidance | Source |
|---|---|---|---|---|---|
| Reserved regions | `GeometryProxy.reservedRegions(kind:options:)` | SwiftUI | iOS 27.1 material | Query `.division` or `.occlusion`; use frames for custom layout. `.includeInactive` supports a stable inactive-region query. | `APPLE_DUO_ADAPTIVE_LAYOUTS` |
| Reserved regions | `UIView.reservedRegions(kind:options:)` | UIKit | iOS 27.1 material | Query a view’s runtime regions; never substitute a Figma number. | `APPLE_DUO_ADAPTIVE_LAYOUTS` |
| Arrangements | `ArrangementView` / `.arrangementViewStyle(_:)` | SwiftUI | iOS 27.1 material | Use primary/secondary content when a system split or overlay arrangement fits. | `APPLE_DUO_ADAPTIVE_LAYOUTS` |
| Arrangements | `UIArrangementViewController` / `updateArrangement(_:)` | UIKit | iOS 27.1 material | Host as a controller; configure primary/secondary controllers. | `APPLE_DUO_ADAPTIVE_LAYOUTS` |
| Arrangement styles | `.split`, `.overlay`, `UISplitArrangement` | SwiftUI/UIKit | iOS 27.1 material | Choose based on geometry and task; provide a single-pane fallback. | `APPLE_DUO_ADAPTIVE_LAYOUTS` |
| Navigation | `NavigationSplitView`, `NavigationStack`, `TabView` | SwiftUI | existing/adaptive in Duo | Prefer system containers; columns collapse when space is constrained. | `APPLE_DUO_PREPARE_APP` |
| Navigation | `UISplitViewController`, `UINavigationController`, `UITabBarController` | UIKit | existing/adaptive in Duo | Prefer managed bars over hand-built `UIToolbar`/`UINavigationBar`/`UITabBar`. | `APPLE_DUO_PREPARE_APP`, `APPLE_DUO_BARS` |
| Bar context | `toolbarVerticalEdge` | SwiftUI | iOS 27.1 material | Read in a custom item to adapt its representation; do not add compensating spacing. | `APPLE_DUO_BARS` |
| Bar overflow | `toolbarCompressionBehavior`, `ToolbarOverflowMenu`, `additionalOverflowItems`, `visibilityPriority` | SwiftUI/UIKit | iOS 27.1 material | Let system overflow manage low-priority actions. Exact framework-member signatures require final-SDK verification. | `APPLE_DUO_BARS` |
| Hinge interaction | `.onHingeChange` / `UIHingeInteraction` | SwiftUI/UIKit | iOS 27.1 material | For live effects only; a missing hinge is normal. Use regions/arrangements for layout. | `APPLE_DUO_MULTI_DISPLAY` |
| Corners | `ConcentricRectangle` / `UICornerConfiguration` | SwiftUI/UIKit | iOS 26 material | Use for screen-shape-aware corners rather than fixed radii. | `APPLE_DUO_PREPARE_APP` |
| Scene geometry | `UIWindowScene` and scene bounds | UIKit | existing | Obtain screen context from the active window scene; do not use a main-screen assumption. | `APPLE_DUO_PREPARE_APP` |
| Scene activation | `UIWindowSceneActivationAction` | UIKit | Duo material | Request a new scene only from an availability-aware UI; the action hides when creation is unavailable and errors still require handling. | `APPLE_DUO_MULTI_DISPLAY` |
| Scene accessory | `CameraCaptureAccessory`, `.sceneAccessory`, `.onAvailabilityChange` | SwiftUI | Duo material | Camera-only supplementary outer-display UI; available only with full-screen inner UI and an active camera session. Treat availability as dynamic. | `APPLE_DUO_MULTI_DISPLAY` |
| Camera | `AVCaptureDeviceDiscoverySession`, `AVCaptureDeviceDirectionCoordinator` | AVFoundation | Duo material | Use the virtual front camera unless the app needs each physical camera’s unique capabilities. | `APPLE_DUO_CAMERA` |

The prompt’s names `ReservedRegion` and `UIViewReservedRegion` were not observed as exact public type symbols in the verified Apple transcript. This index intentionally records the verified query methods instead of inventing names.
