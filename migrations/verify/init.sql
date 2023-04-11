-- SQLBook: Code

-- Verify swapster:init on pg

BEGIN;

SELECT
    "id",
    "name",
    "email",
    "city",
    "password",
    "picture"
FROM "user"
WHERE false;

SELECT "id", "name" FROM "author" WHERE false;

SELECT "id", "name" FROM "category" WHERE false;

SELECT
    "id",
    "title",
    "resume",
    "category_id"
FROM "work"
WHERE false;

SELECT
    "id",
    "isbn_13",
    "cover_page",
    "editor",
    "publication_date",
    "language",
    "pages_number",
    "height",
    "width",
    "thickness",
    "work_id"
FROM "book"
WHERE false;

SELECT
    "id",
    "book_id",
    "user_id",
    "availability",
    "status"
FROM "user_has_book"
WHERE false;

SELECT
    "id",
    "work_id",
    "author_id"
FROM "author_has_work"
WHERE false;

ROLLBACK;