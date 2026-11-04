-- Historical migration: already applied to the fictional team's database.
-- This workshop has no running database. Review SQL changes as text.
CREATE TABLE loans (
    id INTEGER PRIMARY KEY,
    book_title TEXT NOT NULL,
    due_date TEXT NOT NULL,
    renewal_count INTEGER NOT NULL DEFAULT 0
);
