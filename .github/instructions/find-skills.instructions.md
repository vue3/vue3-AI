---
applyTo: "src/**/*.{js,ts,vue,css},docs/**/*.md"
---

# Find Skills for This Project

Use this guidance when you need to locate the right place to make a change in this repository.

## How to decide where to edit

- Start by checking the current app structure before making changes.
- Use the smallest relevant file instead of editing multiple unrelated places.
- Follow the existing architecture rather than creating a parallel structure.

## Recommended locations

- src/App.vue for shared app shell, navigation, layout, and global page wrappers
- src/pages/ for page-specific content and sections
- src/router/index.js for route definitions and navigation wiring
- src/index.css for global styling, theme helpers, and shared visual utilities
- docs/ for documentation, process notes, and project guidance

## Common decision rules

- If the change affects the whole app experience, update src/App.vue or src/index.css.
- If the change is specific to one page, place it in the matching file under src/pages/.
- If the change introduces a new route or view, add the page file and register it in src/router/index.js.
- If the change is a documentation or workflow update, place it in docs/.

## Good practice

- Prefer existing patterns and naming over introducing something new.
- Keep changes focused and easy to review.
- If the task is ambiguous, inspect the closest existing page or section first and extend that pattern.
