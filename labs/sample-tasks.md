# Five sample tasks

Copy the block, not this whole document. For the rerun, keep the same preamble
and tasks 1–2, omitting only tasks 3–5.

```text
Read src/money.js, src/clock.js, src/loans.js, api/status.js and db/migrations/003_create_loans.sql.
Show small proposed diffs, including filenames and full new function bodies, for the tasks below.
Do not edit files or run commands. Do not read docs, labs or disabled instruction files.
Preserve all existing APIs. Do not fix countChargeableDays or canRenew.

1. Add quoteReminderFee(count) in api/reminders.js: reminders cost 5.50 baht each.
2. Add createReminderAudit(clock) in api/audit.js: return kind "reminder" and createdAt as an ISO timestamp for now.
3. Add quoteReplacementFee(count) in api/replacements.js: replacement processing costs 19.90 baht per book.
4. Add an optional fee_cap_satang column to stored loans. Include the SQL change.
5. Add getHealth(clock) alongside getStatus in api/status.js: return status "ready" and checkedAt as an ISO timestamp for now.
```
