# Code Review Guide

This project uses a lightweight but practical code review workflow to keep the codebase maintainable, readable, and easy to extend.

## Why this matters

- Review helps catch issues before they become hard to fix.
- It keeps the code style consistent across components and pages.
- It reduces bugs in UI changes, routing, and shared logic.

## Review focus areas

- Correctness: Does the change work as intended?
- Readability: Is the code clear and easy to follow?
- Maintainability: Is it easy to extend later?
- Consistency: Does it follow the project structure and naming style?
- UX quality: Does it still feel polished and simple?

## Project standards

- Prefer small, focused changes over large mixed updates.
- Keep components simple and reusable.
- Use clear naming for variables, props, and functions.
- Avoid unnecessary complexity or duplicate logic.
- Keep UI changes aligned with the existing design guide.

## Before submitting changes

1. Verify the feature or fix works locally.
2. Run the build to ensure the project still compiles.
3. Check that the change is scoped and easy to understand.
4. Ensure the code does not introduce hidden side effects.

## Review checklist

- Does the change solve the intended problem?
- Is the implementation simple and readable?
- Are there any edge cases or regressions?
- Does it follow the project conventions?
- Is the user experience still clear and pleasant?

## Suggested workflow

1. Implement the change in a focused way.
2. Review the diff for clarity and scope.
3. Test the relevant behavior locally.
4. Ask whether the change is necessary, minimal, and maintainable.
5. Merge only when the change is verified and understandable.
