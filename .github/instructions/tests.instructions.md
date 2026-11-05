---
description: "Use when creating or editing *.test.js files"
applyTo: "**/*.test.js"
---

# Test conventions

- New tests MUST use given*...\_when*..._then_... names so failures describe the scenario.
- Time-related tests MUST use fakeClock from src/clock.js; do not sleep or read wall-clock time.
