const fs = require('fs');
const path = require('path');
const db = require('./db.json');

// function pgQuoteEscape(row) {
//   const newRow = {};
//   Object.entries(row).forEach(([prop, value]) => {
//       if (typeof value !== 'string') {
//           newRow[prop] = value;
//           return;
//       }
//       newRow[prop] = value.replaceAll("'", "''");
//   });
//   return newRow;
// }


let transaction = 'BEGIN;';

// Insertion des données dans les tables en parcourant le fichier db.json avec des "fausses données"
async function generateSQL() {
  // Table user
  db.user.forEach((user) => {
    transaction += `
        INSERT INTO "user"
        ("name", "email", "password", "city", "picture")
        VALUES
        ('${user.name}', '${user.email}', '${user.password}', '${user.city}', '${user.picture}');
        `;
  });

  // Table category
  db.category.forEach((category) => {
    transaction += `
        INSERT INTO "category"
        ("name")
        VALUES
        ('${category.name}');
        `;
  });

  // Table work
  db.work.forEach((work) => {
    transaction += `
        INSERT INTO "work"
        ("title", "resume", "category_id")
        VALUES
        ('${work.title}', '${work.resume}', '${work.category_id}');
        `;
  });

  // Table author
  db.author.forEach((author) => {
    transaction += `
        INSERT INTO "author"
        ("lastname", "firstname")
        VALUES
        ('${author.lastname}', '${author.firstname}');
        `;
  });


  // Table book
  db.book.forEach((book) => {
    transaction += `
        INSERT INTO "book"
        ("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
        VALUES
        ('${book.isbn_13}', '${book.cover_page}', '${book.editor}', '${book.publication_date}', '${book.language}', '${book.pages_number}', '${book.height}', '${book.width}', '${book.thickness}', '${book.work_id}');
        `;
  });

  // Table author_has_work
  db.author_has_work.forEach((authorHasWork) => {
    transaction += `
        INSERT INTO "author_has_work"
        ("work_id", "author_id")
        VALUES
        ('${authorHasWork.work_id}', '${authorHasWork.author_id}');
        `;
  });

  // Table user_has_book

  db.user_has_book.forEach((userHasBook) => {
    transaction += `
        INSERT INTO "user_has_book"
        ("book_id", "user_id","disponibility", "status")
        VALUES
        ('${userHasBook.book_id}', '${userHasBook.user_id}', '${userHasBook.disponibility}', '${userHasBook.status}');
        `;
  });


  transaction += 'COMMIT;';
  fs.writeFileSync(path.join(__dirname, 'seeding.sql'), transaction);
}

generateSQL();

console.log('fichier seeding.sql généré');