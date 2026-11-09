---
description: "Use when creating or editing *.test.js files"
applyTo: "**/*.test.js"
---

# Test conventions

- New tests MUST be grouped with `describe('functionName', ...)`, one `describe` per function under test.
- Test names inside `describe` MUST be camelCase and say the expected result, e.g. `returnsZeroWhenDaysLateIsZero`.
- Get `describe` and `test` from the harness destructuring, same as `test` and `assert`.
- Time-related tests MUST use fakeClock from src/clock.js; do not sleep or read wall-clock time.