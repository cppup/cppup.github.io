# Immersive entry prototype

This prototype adds a scene-driven portal at `/entry/`, designed as a game-like entry to the existing website sections.

## Design approach

- Use a lightweight **2.5D procedural desk scene** (pure HTML/CSS/JS) for fast loading and broad compatibility.
- Keep interactive zones in `entry/scene-config.js` as structured hotspot data.
- Render desktop as a scene overlay with clickable hotspots; render mobile as a dedicated hotspot card list (instead of shrinking desktop visuals).

## Hotspot and link mapping

| Hotspot | Link target | Role |
| --- | --- | --- |
| Workbench Terminal | `/#about` | Jump to profile/about section |
| Research Notebook | `/blog/` | Open full blog list |
| Mini Arcade Console | `/games/` | Open game center |
| Snake Cartridge | `/games/snake.html` | Direct game deep-link |
| Source Repository | `https://github.com/cppup/cppup.github.io` | Open repository |

## Future photo -> scene / 3D asset integration suggestions

The current provider is `procedural`. It can be replaced without changing page routing:

1. **Photo-derived scene**: build a photo-to-layout adapter that outputs background layers + hotspot placements and writes into the same hotspot schema (`id`, `href`, `placement`, `description`).
2. **3D asset flow (e.g. worldlabs.ai pipeline)**: export GLB/GLTF + camera setup, then mount a viewer adapter via `adapters.generated3d.entry` and project 3D anchors onto 2D hotspot overlays.
3. **Runtime strategy**: keep a provider flag (`procedural` / `photo` / `generated3d`) and preserve the mobile card fallback path for low-end devices and accessibility reliability.
