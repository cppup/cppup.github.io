window.CPPUP_ENTRY_SCENE = {
  version: "prototype-v1",
  provider: "procedural",
  scene: {
    id: "desk-window-v1",
    description: "Procedural desk scene used as placeholder for future photo/3D pipelines."
  },
  hotspots: [
    {
      id: "about-terminal",
      label: "Workbench Terminal",
      description: "Open the profile and intro section.",
      href: "/#about",
      placement: { x: 16, y: 58, depth: "front" },
      icon: "⌨️"
    },
    {
      id: "blog-notebook",
      label: "Research Notebook",
      description: "Browse all blog posts.",
      href: "/blog/",
      placement: { x: 34, y: 66, depth: "front" },
      icon: "📓"
    },
    {
      id: "game-console",
      label: "Mini Arcade Console",
      description: "Jump into the game center.",
      href: "/games/",
      placement: { x: 59, y: 56, depth: "mid" },
      icon: "🕹️"
    },
    {
      id: "snake-cartridge",
      label: "Snake Cartridge",
      description: "Launch Snake directly.",
      href: "/games/snake.html",
      placement: { x: 72, y: 70, depth: "front" },
      icon: "🐍"
    },
    {
      id: "source-repo",
      label: "Source Repository",
      description: "View project source code.",
      href: "https://github.com/cppup/cppup.github.io",
      placement: { x: 84, y: 38, depth: "back" },
      icon: "🧩",
      external: true
    }
  ],
  adapters: {
    photoToScene: {
      enabled: false,
      entry: "",
      expectedInput: "single-desk-photo-or-multi-view-set",
      expectedOutput: "scene background and hotspot placement map"
    },
    generated3d: {
      enabled: false,
      entry: "",
      expectedInput: "glb-or-gltf-assets",
      expectedOutput: "lightweight viewer layer and projected clickable zones"
    }
  }
};
