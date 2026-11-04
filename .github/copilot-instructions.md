# Library Loans house rules

- Money MUST be calculated and stored as integer satang through Money in src/money.js, never floating-point baht, to avoid unit and rounding mistakes. Convert only for display.
- Current time MUST come from the injected clock.now(), which returns a Date, so tests can use fakeClock. See src/clock.js and buildFeeReceipt in src/loans.js. Only the systemClock adapter may read wall-clock time; converting an explicit date value is allowed.
- Existing files in db/migrations/ MUST NOT be edited or overwritten because they are already applied. Add a new numbered migration for schema changes.
