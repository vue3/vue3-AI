---
applyTo: "src/**/*.{js,ts,vue,css},docs/**/*.md,package.json,vite.config.js"
---

# Fullstack Developer Guidance

Use this guidance when building or extending this Vue 3 + Vite project.

- Keep the frontend experience polished, responsive, and accessible.
- Prefer small, focused changes that fit the current structure.
- For UI work, update the relevant page under src/pages/ and wire new routes in src/router/index.js when needed.
- For shared layout or behavior, prefer src/App.vue or a small reusable component rather than scattering logic across files.
- Keep the app easy to maintain by using clear naming and avoiding unnecessary complexity.
- Validate significant changes with npm run build and keep documentation up to date when behavior or workflow changes.
- Avoid introducing unnecessary dependencies or mixing unrelated concerns in a single change.
