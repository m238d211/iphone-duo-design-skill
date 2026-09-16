# SwiftUI

## Runtime adaptation

Use `@Environment(\.horizontalSizeClass)` and `@Environment(\.verticalSizeClass)` as inputs alongside the actual container/window geometry. Make layouts freely resizable; do not branch on an iPhone Duo model identifier, guessed point bounds, or inner interface orientation. Prefer `NavigationStack`, `NavigationSplitView`, and `TabView`, which Apple documents as adaptive on Duo.

Constrain foreground controls with the safe area. SwiftUI places content within it by default; use `ignoresSafeArea` only for intended full-bleed backgrounds. Treat each edge independently. Standard containers and `.toolbar` permit Apple’s bars to move and avoid system/hardware regions; do not recreate system bars with fixed offsets.

## Fold and region handling

For custom geometry on an SDK where it is available, query `GeometryProxy.reservedRegions(kind:options:)`: use `.division` for the partially folded region and `.occlusion` for obstructed regions. Layout around region frames, not an assumed hinge width. Use `ArrangementView` plus `.arrangementViewStyle(.split)` or `.overlay` when its primary/secondary model matches the task; retain a single-pane fallback.

`.onHingeChange` is for continuous, optional interactive effects. A missing hinge is valid. Do not base layout solely on hinge angle; regions and arrangements express layout availability.

## Navigation, scenes, and continuity

Use `NavigationSplitView` to preserve hierarchy while columns collapse or reappear, and keep selection/path/domain state above views whose presentation changes. Address the active scene/window rather than assuming a main screen. Support scene restoration and independent scene state when the app offers multiple windows. Do not tie feature availability to a pose.

Apple says new-window creation is unavailable on the outer display and available on the inner display. Treat that as dynamic availability rather than a layout inference; provide a disabled/hidden affordance through the supported system action and handle a failed request. Scene accessories can span displays only for their documented use case; `CameraCaptureAccessory` requires full-screen inner UI and an active camera session, and its availability can change.

## Accessibility and RTL

Use Dynamic Type-native controls and allow content to reflow under large text. Provide semantic labels, traits, predictable VoiceOver order, sufficient contrast, and controls that remain reachable after a bar or fold displacement. Respect Reduce Motion and Reduce Transparency; custom vertical-bar content must remain legible with reduced transparency. Use leading/trailing alignment rather than left/right, test RTL layouts with asymmetric insets, and test expansion with localized strings.

## Availability

The Duo-specific region, arrangement, hinge, and vertical-bar APIs are described in Apple’s iOS 27.1 materials. Check final SDK availability and guard APIs before use. Sources: `APPLE_DUO_PREPARE_APP`, `APPLE_DUO_BARS`, `APPLE_DUO_ADAPTIVE_LAYOUTS`, `APPLE_DUO_MULTI_DISPLAY`.
