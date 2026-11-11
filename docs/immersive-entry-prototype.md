# Immersive entry prototype

This prototype adds a scene-driven portal at `/entry/`, with a dual-mode “Quiet / Active” upgrade that keeps the site feel cohesive while making the experience more like a game-like 3D entrance.

## Dual-scene design

- **Quiet**: minimal, clean workstation view with snowy mountain silhouettes outside the glass and a tidy Apple-like desk setup.
- **Active**: same room composition, but the window reveals skiers moving through the snow, adding motion without requiring a full 3D engine.
- Both scenes preserve the same five entry points and keep the same site links for continuity.

## 3D / depth strategy

- Layered scene depth: background mountains, midground window frame, foreground desk and monitor.
- Parallax via pointer movement, but limited to a small angular range to keep the interaction lightweight.
- Hotspots are anchored as object-based markers in the scene rather than floating in a flat overlay panel.
- Motion control is reduced automatically when `prefers-reduced-motion` is enabled.

## Dynamic motion and performance

- Skiers in the Active scene are intentionally simple CSS keyframe sprites, not heavy 3D or skeletal systems.
- Only a few layers receive transforms per pointer event, so the page stays responsive on moderate hardware.
- The scene uses CSS transitions and light animation to preserve visual polish while keeping GPU load controlled.

## Hotspot and link mapping

| Hotspot | Link target | Role |
| --- | --- | --- |
| Workbench Terminal | `/#about` | Jump to profile/about section |
| Research Notebook | `/blog/` | Open full blog list |
| Mini Arcade Console | `/games/` | Open game center |
| Snake Cartridge | `/games/snake.html` | Direct game deep-link |
| Source Repository | `https://github.com/cppup/cppup.github.io` | Open repository |

## Low-performance / mobile / motion reduction strategy

- Mobile devices do not receive the large desktop scene; they fall back to a simpler card list of the same hotspots.
- Reduced motion mode disables the parallax and animation loops to keep the experience calm and accessible.
- The scene default remains Quiet to reduce unnecessary motion and keep the page stable while loading.

## Future photo -> scene / 3D asset integration suggestions

The current provider remains `procedural`, but its data structure is isolated so future replacements are straightforward:

1. **Photo-derived scene**: feed the same hotspot schema plus a scene background/placement map generated from a desk photo or multi-view set.
2. **3D asset flow (e.g. worldlabs.ai pipeline)**: export a lightweight GLB/GLTF asset and translate object anchors into the same hotspot overlay positions.
3. **Runtime strategy**: keep a `quiet` / `active` switch and a provider flag (`procedural` / `photo` / `generated3d`) so the rendering layer can evolve without changing site links.
