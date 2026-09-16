# UIKit

## Runtime adaptation

Read `UITraitCollection` horizontal and vertical size classes independently and use the active view/controller bounds for layout. Use `safeAreaLayoutGuide`, `safeAreaInsets`, and layout margins through Auto Layout; do not calculate insets from device pixels or a known-model table. Avoid `UIScreen.main`: Apple calls it ambiguous on a two-display device. Obtain dynamic screen context, when truly necessary, from the relevant `UIWindowScene`.

Use `UINavigationController`, `UITabBarController`, and `UISplitViewController` instead of custom bars. Apple documents them as adaptive across Duo poses. Keep foreground constraints within the safe area and allow background views to fill bounds behind system chrome. Do not assume equal left/right insets.

## Fold and arrangement handling

When available, query `view.reservedRegions(kind:options:)` and layout around the resulting frames. Use `UIArrangementViewController` with primary/secondary view controllers and update its arrangement for an adaptive split/overlay layout. A division or occlusion region is runtime geometry, not a hardcoded hinge coordinate.

`UIHingeInteraction` supplies live hinge status/angle for effects. It is not the preferred source for layout. Treat absent hinge data as normal and use regions/arrangements for layout outcomes.

## Scenes, state, and accessibility

Use scene lifecycle and the active window scene’s bounds; support multiple scene instances deliberately, with state scoped per scene where appropriate. Preserve navigation stack, selection, task progress, and scroll state through resize/fold transitions. Use accessibility labels/traits and scalable text, respect Reduce Motion/Transparency and increased contrast, preserve keyboard/focus order, and express layout in leading/trailing directions for RTL.

Apple documents that new-window creation is unavailable on the outer display and available on the inner display. Use `UIWindowSceneActivationAction` through availability-aware UI and handle errors; do not infer availability from guessed display bounds. Scene accessories have dynamic availability and require their documented conditions.

## Availability

`UIView.reservedRegions`, `UIArrangementViewController`, and `UIHingeInteraction` occur in Apple’s iOS 27.1 Duo materials. Verify exact signatures and final availability in the shipping SDK and keep conventional safe-area/single-pane fallbacks. Sources: `APPLE_DUO_PREPARE_APP`, `APPLE_DUO_BARS`, `APPLE_DUO_ADAPTIVE_LAYOUTS`, `APPLE_DUO_MULTI_DISPLAY`.
