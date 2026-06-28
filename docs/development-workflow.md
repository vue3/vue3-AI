# Development Workflow

This project follows a simple workflow that keeps development steady and review-friendly.

## Recommended process

1. Clarify the goal of the change.
2. Implement the smallest useful version first.
3. Verify the result locally.
4. Review the change for clarity and consistency.
5. Update documentation if the behavior or workflow changed.

## Quality expectations

- Keep code readable and easy to maintain.
- Prefer reusable UI patterns over duplicated styles.
- Avoid introducing unnecessary dependencies.
- Make sure the app remains responsive and accessible.

## Validation steps

- Run the build with npm run build.
- Check the local preview with npm run dev when needed.
- Review the diff and make sure the change is focused.

## When to ask for review

- Before merging larger features.
- Before changing shared components or routing behavior.
- Before introducing new dependencies or architecture decisions.
