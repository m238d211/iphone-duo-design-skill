# Implementation review checklist

- Confirm each Duo symbol against the final SDK and availability-guard it.
- Reject model detection, pixel-to-point bounds, `UIScreen.main` assumptions, and fixed safe-area constants.
- Confirm the active window/scene, traits/constraints, safe areas, and reserved regions drive layout.
- Prefer standard navigation, bars, sheets, menus, split views, and arrangements; test overflow.
- Ensure layout changes do not recreate domain state or discard navigation/selection/scroll unnecessarily.
- For Flutter, confirm iOS-specific behavior comes from a verified native bridge; do not use Android-only `displayFeatures` as an iOS feature.
- Include accessibility, RTL, localization, unavailable-SDK fallback, and closed/open/partial/Split View verification cases.
