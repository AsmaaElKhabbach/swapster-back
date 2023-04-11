-- Deploy swapster:init to pg

BEGIN;

CREATE TABLE
    "user" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" VARCHAR(128) NOT NULL UNIQUE,
        "email" VARCHAR(320) NOT NULL UNIQUE,
        "city" VARCHAR(50) NOT NULL,
        "password" VARCHAR NOT NULL,
        --  La chemin de la photo de profil par défaut sera celui de la machine front
        "picture" VARCHAR NOT NULL DEFAULT '../../data/image/ppdefaut.jpeg',
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ
    );

CREATE TABLE
    "author" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" VARCHAR(128) NOT NULL,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ
    );

CREATE TABLE
    "category" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" VARCHAR(48) NOT NULL UNIQUE,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ
    );

CREATE TABLE
    "work" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "title" VARCHAR NOT NULL,
        "resume" VARCHAR NOT NULL,
        "category_id" INT NOT NULL REFERENCES "category" ("id"),
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ
    );

CREATE TABLE
    "book" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "isbn_13" VARCHAR NOT NULL,
        "cover_page" VARCHAR NOT NULL,
        "editor" VARCHAR NOT NULL,
        "publication_date" VARCHAR(24) NOT NULL,
        "language" VARCHAR(24) NOT NULL,
        "pages_number" INT NOT NULL,
        "height" VARCHAR(10) NOT NULL,
        "width" VARCHAR(10) NOT NULL,
        "thickness" VARCHAR(10) NOT NULL,
        "work_id" INT NOT NULL REFERENCES "work" ("id"),
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ
    );

CREATE TABLE
    "user_has_book" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "book_id" INT NOT NULL REFERENCES "book"("id") ON DELETE CASCADE,
        "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
        "disponibility" VARCHAR(24) NOT NULL DEFAULT 'available',
        "status" VARCHAR(24) NOT NULL,
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ,
        UNIQUE ("book_id", "user_id")
    );

CREATE TABLE
    "author_has_work" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "work_id" INT NOT NULL REFERENCES "work"("id"),
        "author_id" INT NOT NULL REFERENCES "author"("id"),
        "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMPTZ,
        UNIQUE ("work_id", "author_id")
    );

COMMIT;