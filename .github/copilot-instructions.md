# Frontend Design Skills for This Project

This repository is a Vue 3 + Vite starter. When generating or editing UI, follow these simple frontend design principles:

## 1. Keep the interface clear and friendly

- Prefer simple layouts, readable text, and obvious actions.
- Avoid overloading the page with too many elements.

## 2. Make it responsive

- Ensure layouts work well on mobile, tablet, and desktop.
- Use flexible spacing and avoid fixed widths where possible.

## 3. Focus on usability

- Use clear button labels and visible feedback.
- Keep important actions easy to find.

## 4. Build accessible UI

- Use semantic HTML elements.
- Ensure buttons and forms are keyboard-friendly.
- Maintain good color contrast.

## 5. Keep components small and reusable

- Split UI into small Vue components when the screen becomes complex.
- Reuse style patterns instead of repeating code.

## 6. Design with consistency

- Use a consistent spacing scale and color palette.
- Keep typography and button styles predictable.

## 7. Prefer progressive enhancement

- Start with a clean baseline experience.
- Add visual polish only after the core interaction works.

## 8. Tailwind and Element Plus guidance

- Use Tailwind utilities for layout, spacing, and responsive behavior.
- Use Element Plus for common UI patterns like buttons, cards, and dialogs.
- Prefer a polished but lightweight visual system over excessive decoration.

## 9. Code review and development workflow

- Keep changes small, focused, and easy to review.
- Prefer simple implementations over clever ones.
- Before completing work, verify the result locally and ensure the build still passes.
- Check that new code follows the existing structure, naming, and UI conventions.
- When suggesting or applying changes, think about correctness, readability, maintainability, and user experience.
- For bigger features, break the work into clear steps and review each step before moving on.

## 10. Find skills and change placement

- Before editing, inspect the existing project structure to find the most relevant place for the change.
- Prefer the current app shell in src/App.vue for shared navigation and layout updates.
- Put page-specific content in src/pages/ and register routes in src/router/index.js.
- Use src/index.css for global styling and theme helpers.
- Keep documentation updates in docs/ and follow the current repository conventions.

When creating new features in this project, aim for a balance of simplicity, usability, and visual clarity.
