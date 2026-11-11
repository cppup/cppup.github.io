# Immersive entry prototype

The `/entry/` route is a dual-scene portal (Quiet/Active) designed as a lightweight 2.5D interactive entry for the site.

## This round: 3D redesign (converged pass)

Compared with the previous flat prototype, this pass strengthens depth and material feeling while preserving route behavior:

- Added **multi-layer cinematic depth**: sky/background, mountain distance layers, window plane, desk/object foreground, and final vignette.
- Added **realistic light structure**: volumetric warm lamp glow, glass reflections, frame contact shadows, ambient occlusion near desk/floor contact.
- Improved **surface quality cues**: desk sheen, stronger object cast shadows, monitor and arcade mass separation.
- Kept **Quiet/Active scene toggle** and retained Active skier traversal in the window.
- Kept **hotspots anchored in object space** (`front/mid/back` depth with z-offset) instead of pure flat UI overlay.

## Interaction and fallback strategy

- Pointer-based subtle camera/parallax remains enabled in normal mode.
- `prefers-reduced-motion: reduce` disables animation/transition effects.
- Mobile still uses a dedicated card list fallback (not desktop hard-scale).
- Keyboard accessibility remains: Tab focus + arrow-key cycling across hotspots.

## Hotspot mapping (unchanged)

| Hotspot | Link target | Role |
| --- | --- | --- |
| Workbench Terminal | `/#about` | Jump to profile/about section |
| Research Notebook | `/blog/` | Open full blog list |
| Mini Arcade Console | `/games/` | Open game center |
| Snake Cartridge | `/games/snake.html` | Direct game deep-link |
| Source Repository | `https://github.com/cppup/cppup.github.io` | Open repository |

## Upgrade path (photo -> scene / generated 3D)

The `entry/scene-config.js` schema remains the adapter seam:

1. **Photo-derived pipeline**: infer object anchors and depth layers from desk/window photos and output the same hotspot coordinates.
2. **Generated-3D pipeline** (worldlabs.ai or other tools): export GLB/GLTF + object anchor map, project anchors into the same hotspot runtime.
3. **Runtime compatibility**: keep `quiet/active` mode semantics and current hotspot IDs/links stable so visuals can evolve without navigation regressions.
