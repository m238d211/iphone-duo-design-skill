# Design review checklist

- Does every Apple claim name a source ID and avoid turning community values into system facts?
- Are horizontal and vertical size classes independent, and is geometry used rather than device detection?
- Are foreground controls inside each runtime safe-area edge and away from active reserved/division regions?
- Is navigation based on task and available space, with a coherent one-pane fallback?
- Do bars use the correct system/container context rather than a simplistic outer/inner rule?
- Are fold, resize, Split View, and presentation changes continuous for navigation, selection, and scroll state?
- Are VoiceOver, Dynamic Type, keyboard/focus, Reduce Motion/Transparency, contrast, RTL, and localization expansion covered?
- Are Figma-derived statements original summaries with attribution and any gaps visible?
