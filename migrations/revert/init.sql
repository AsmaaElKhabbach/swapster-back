-- Revert swapster:init from pg

BEGIN;

DROP TABLE "author_has_work",
"user_has_book",
"book",
"work",
"category",
"author",
"user";


COMMIT;
