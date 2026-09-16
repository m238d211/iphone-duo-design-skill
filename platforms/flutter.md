# Flutter

Flutter UI should adapt to the active view, not a Duo model name or an orientation-only switch. Use `LayoutBuilder` for local constraints; use `MediaQuery.sizeOf`, `MediaQuery.paddingOf`, `MediaQuery.viewPaddingOf`, `MediaQuery.viewInsetsOf`, and `SafeArea` for window and system geometry. Preserve controllers, navigation, selected entities, and service/domain state while the widget tree changes presentation.

## Display features and iOS boundary

Flutter’s documented `MediaQueryData.displayFeatures` / `MediaQuery.displayFeaturesOf` describes hardware-obstructed regions, but its API documentation explicitly says the list is populated **only on Android**. Therefore it must not be presented as an iPhone Duo fold/hinge API. On iOS, a Flutter app can safely adapt to size and padding without native Duo APIs; Duo-specific reserved regions, arrangements, hinge status, camera direction, or scene features require a verified native implementation.

Create a small iOS abstraction with a stable Dart model (for example: safe/reserved-region frames, hinge status if required, and availability), then implement it in Swift against verified APIs. Use a `MethodChannel` for request/response and an `EventChannel` only when a continuous native event is genuinely needed. Make unavailable APIs return an explicit unsupported state, not guessed geometry. Keep native code scoped to a plugin/host boundary so normal iOS and non-iOS builds use the same layout fallback.

## Layout and accessibility

Use available width/height plus padding to select a one- or two-pane presentation; do not encode `669 × 951`, 94 pt, or any Figma guide as runtime conditions. Put interactive content in runtime safe padding, let intentionally decorative backgrounds bleed, and reflow rather than reset on constraints changes. Respect `MediaQuery.textScalerOf`, `disableAnimations`, `highContrast`, and `boldText`; provide semantic labels, traversal order, adequate targets, RTL-aware `EdgeInsetsDirectional`/`AlignmentDirectional`, and localized expansion testing.

Sources: `FLUTTER_DISPLAY_FEATURES` and `FLUTTER_CHANNELS`. Flutter support must be re-verified at release time.
