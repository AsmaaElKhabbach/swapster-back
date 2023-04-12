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
//       newRow[prop] = value.replaceAll("'", "’");
//   });
//   return newRow;
// }


let transaction = 'BEGIN;';

// Insertion des données dans les tables en parcourant le fichier db.json avec des "fausses données"
async function generateSQL() {
<<<<<<< HEAD
<<<<<<< HEAD
	// Table user
	db.user.forEach((user) => {
			transaction += `
=======
	// Table user
	db.user.forEach((user) => {
		transaction += `
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
	INSERT INTO "user"
	("name", "email", "password", "city", "picture")
	VALUES
	('${user.name}', '${user.email}', '${user.password}', '${user.city}', '${user.picture}');
	`;
	});

	// Table category
	db.category.forEach((category) => {
<<<<<<< HEAD
			transaction += `
=======
		transaction += `
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
	INSERT INTO "category"
	("name")
	VALUES
	('${category.name}');
	`;
	});

	// Table work
	db.work.forEach((work) => {
<<<<<<< HEAD
			transaction += `
=======
		transaction += `
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
	INSERT INTO "work"
	("title", "resume", "category_id")
	VALUES
	('${work.title}', '${work.resume}', ${work.category_id});
	`;
	});

	// Table author
	db.author.forEach((author) => {
<<<<<<< HEAD
			transaction += `
	INSERT INTO "author"
	("name")
	VALUES
	('${author.name}');
=======
		transaction += `
	INSERT INTO "author"
	("lastname", "firstname")
	VALUES
	('${author.lastname}', '${author.firstname}');
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
	`;
	});


	// Table book
	db.book.forEach((book) => {
<<<<<<< HEAD
			transaction += `
=======
		transaction += `
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
	INSERT INTO "book"
	("isbn_13", "cover_page", "editor", "publication_date", "language", "pages_number", "height", "width", "thickness", "work_id")
	VALUES
	('${book.isbn_13}', '${book.cover_page}', '${book.editor}', '${book.publication_date}', '${book.language}', '${book.pages_number}', '${book.height}', '${book.width}', '${book.thickness}', ${book.work_id});
	`;
	});

	// Table author_has_work
	db.author_has_work.forEach((authorHasWork) => {
<<<<<<< HEAD
			transaction += `
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	(${authorHasWork.work_id}, ${authorHasWork.author_id});
=======
		transaction += `
	INSERT INTO "author_has_work"
	("work_id", "author_id")
	VALUES
	( '${authorHasWork.work_id}', '${authorHasWork.author_id}');
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
	`;
	});

	// Table user_has_book
<<<<<<< HEAD
	db.user_has_book.forEach((userHasBook) => {
			transaction += `
	INSERT INTO "user_has_book"
	("book_id", "user_id","availability", "status")
	VALUES
	(${userHasBook.book_id}, ${userHasBook.user_id}, '${userHasBook.availability}', '${userHasBook.status}');
=======

	db.user_has_book.forEach((userHasBook) => {
		transaction += `
	INSERT INTO "user_has_book"
	("book_id", "user_id","disponibility", "status")
	VALUES
	( '${userHasBook.book_id}', '${userHasBook.user_id}', '${userHasBook.disponibility}', '${userHasBook.status}');
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
	`;
	});


	transaction += 'COMMIT;';
	fs.writeFileSync(path.join(__dirname, 'seeding.sql'), transaction);
<<<<<<< HEAD
=======
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
        ('${work.title}', '${work.resume}', ${work.category_id});
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
        ('${book.isbn_13}', '${book.cover_page}', '${book.editor}', '${book.publication_date}', '${book.language}', '${book.pages_number}', '${book.height}', '${book.width}', '${book.thickness}', ${book.work_id});
        `;
        });

        // Table author_has_work
        db.author_has_work.forEach((authorHasWork) => {
                transaction += `
        INSERT INTO "author_has_work"
        ("work_id", "author_id")
        VALUES
        ( '${authorHasWork.work_id}', '${authorHasWork.author_id}');
        `;
        });

        // Table user_has_book

        db.user_has_book.forEach((userHasBook) => {
                transaction += `
        INSERT INTO "user_has_book"
        ("book_id", "user_id","disponibility", "status")
        VALUES
        ( '${userHasBook.book_id}', '${userHasBook.user_id}', '${userHasBook.disponibility}', '${userHasBook.status}');
        `;
        });


        transaction += 'COMMIT;';
        fs.writeFileSync(path.join(__dirname, 'seeding.sql'), transaction);
>>>>>>> origin/main
=======
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
}

generateSQL();

console.log('fichier seeding.sql généré');