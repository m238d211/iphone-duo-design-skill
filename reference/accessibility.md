# Accessibility, RTL, and localization

Apply this to every adaptive state, not only to the default outer or inner mockup.

- **Dynamic Type and localization:** use scalable system text, allow longer translations to reflow, and avoid fixed-height text controls. Verify panes, overflow, sheets, and bars at large sizes.
- **VoiceOver and focus:** expose meaningful labels/values/actions; preserve a predictable reading and keyboard/focus order after columns collapse, bars move, or content displaces.
- **Motion and transparency:** honor Reduce Motion and `disableAnimations`; do not require hinge-angle animation to understand state. Ensure custom bar content remains legible with Reduce Transparency and increased contrast.
- **Touch and reachability:** keep tappable controls inside runtime safe/reserved geometry and avoid the active fold. Use platform-standard controls where possible for target sizing and repositioning.
- **RTL:** express application layout using leading/trailing, not left/right. Apple says a hardware-aligned vertical bar remains on the same physical side in RTL while content adapts around it; do not mirror a hardware region by assumption. Test asymmetric insets and Split View.
- **Continuity:** preserve focused control, text-entry state, selected item, and scroll position as geometry changes when doing so is meaningful.

Sources: `APPLE_DUO_BARS`, `APPLE_DUO_PREPARE_APP`, `APPLE_DUO_DESIGN`. General accessibility implementation details remain framework- and app-specific.
