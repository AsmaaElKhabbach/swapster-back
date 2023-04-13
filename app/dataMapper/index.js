const client = require("../utils/dbClient");

const dataMapper = {

	// Methode pour insérer le user dans la bdd
	insertUser: async (user) => {
		const query = 'INSERT INTO "user" (name, email, city, password) VALUES ($1, $2, $3, $4) RETURNING *';
		const result = await client.query(query, [user.name, user.email, user.city, user.password]);
		return result.rows[0];
	},

	// // Méthode pour récupérer tous les users
	// getAllUsers: async () => {
	// 	const query = 'SELECT * FROM "user";';
	// 	const result = await client.query(query);
	// 	return result.rows;
	// },

	// Methode pour récupérer le user via l'id
	getOneUserById: async (userId) => {
		const query = 'SELECT * FROM "user" WHERE "id"=$1';
		const result = await client.query(query, [userId]);
		return result.rows[0];
	},

	// Methode pour récupérer le user via le name
	getOneUserByName: async (name) => {
		// La requête : on interroge la bdd
		const query = 'SELECT * FROM "user" WHERE "name"=$1';
		// On retourne le résultat
		const result = await client.query(query, [name]);
		return result.rows[0];
	},

	// Methode pour récupérer le user via l'email
	getOneUserByEmail: async (email) => {
		// La requête : on interroge la bdd
		const query = 'SELECT * FROM "user" WHERE "email"=$1';
		// On retourne le résultat
		const result = await client.query(query, [email]);
		return result.rows[0];
	},

	// Méthode pour mettre à jour le user 
	updateUser: async (user) => {
		const query = 'UPDATE "user" SET "name" = $1, "email" = $2, "city" = $3, "password" = $4, "updated_at" = NOW() WHERE "id" = $5';
		await client.query(query, [user.name, user.email, user.city, user.password, user.id]);
	},

	// Méthode pour supprimer un user via l'id
	deleteUser: async (userId) => {
		const query = 'DELETE FROM "user" WHERE "id" = $1';
		await client.query(query, [userId]);
	},

	// Methode pour rechercher un livre dans searchbar
	searchBook: async (search) => {
		const query = `SELECT work.*, book.*, author.name AS "Author",  category.name AS "Category"
		FROM "book" 
		JOIN "work" ON book.work_id = work.id
		JOIN "author_has_work" ON work.id = author_has_work.work_id
		JOIN "author" ON author_has_work.author_id = author.id
		JOIN "category" ON work.category_id = category.id
		WHERE work.title ILIKE $1 
		OR author.name ILIKE $1 
		OR book.isbn_13 ILIKE $1
		OR category.name ILIKE $1`

		const result = await client.query(query, [`%${search}%`])
		return result.rows
	},

	// Méthode pour récupérer les 10 derniers livres ajoutés
	getLatestBooks: async () => {
		const query = `SELECT "user_has_book"."created_at",
			"work"."title",
			"author"."name",
			"book"."editor",
			"book"."cover_page",
			"book"."language",
			"category"."name" AS category_name,
			"user_has_book"."availability"
		FROM "book" 
	
		JOIN "work" ON "work"."id" = "book"."work_id" 
		JOIN "author_has_work" ON "author_has_work"."id" = "work"."id"
		JOIN "author" ON "author"."id" = "author_has_work"."author_id"
		JOIN "category" ON "category"."id" = "work"."category_id"
		JOIN "user_has_book" ON "user_has_book"."book_id" = "book"."id"
				
		ORDER BY "user_has_book"."created_at" desc limit 5`;

		const result = await client.query(query);
		console.log("laaaaaaaaa dt mapper result: ", result);
		return result.rows;
	},

	// // Méthode pour récupérer tous les livres
	// getAllBooks: async () => {
	// 	const query = `SELECT * FROM book;`;
	// 	const result = await client.query(query);
	// 	return result.rows;
	// },

	// Methode pour récupérer un livre via l'id
	getOneBookById: async (bookId) => {
		const query = `SELECT book.*, "author"."name", "category"."name" AS category_name
		FROM "book"
		JOIN "work" ON "work"."id" = "book"."work_id" 
		JOIN "author_has_work" ON "author_has_work"."id" = "work"."id"
		JOIN "author" ON "author"."id" = "author_has_work"."author_id"
		JOIN "category" ON "category"."id" = "work"."category_id"
		WHERE "book"."id" = $1;`;

		const result = await client.query(query, [bookId]);
		return result.rows[0];
	},

	//Methode pour vérifier si le livre est dejà rattaché au user
	getUserHasBookByBookIdAndUserId: async (bookId, userId) => {
		// Vérifier si le user à un livre 
		const query = `SELECT * FROM "user_has_book" WHERE "book_id" = $1 AND "user_id" =$2`;
		const result = await client.query(query, [bookId, userId])
		return result.rows[0]
	},

	// Methode pour ajouter livre à la liste user
	addBookToUser: async (book_id, user_id, status) => {
		const query = `INSERT INTO "user_has_book" (book_id, user_id, status) VALUES ($1, $2, $3) RETURNING *`
		const result = await client.query(query, [book_id, user_id, status])
		return result.rows[0]
	},

	// Methode pour modifier la dispo ou status
	updatedUserBook: async (userHasBook) => {
		const query = `UPDATE "user_has_book" SET "availability" = $3,"status" = $4, "updated_at" = NOW() WHERE "book_id" = $1 AND "user_id" =$2`;
		await client.query(query, [userHasBook.book_id, userHasBook.user_id, userHasBook.availability, userHasBook.status])
	},

	// Methode pour supprimer un livre de la user liste
	deleteUserBook: async (book_id, user_id) => {
		const query = `DELETE FROM "user_has_book" WHERE "book_id" = $1 AND "user_id" =$2`;
		await client.query(query, [book_id, user_id,]);
	},

	// Méthode pour récupérer tous les exemplaires disponibles d'un livre
	getAllBooksAvailable: async (bookId) => {
		const query = `SELECT "user"."name", "user"."city",	"user"."email", "user_has_book"."status", "book"."height" || ' cm x ' || "book"."width" || ' cm x ' || "book"."thickness" || ' cm' AS "format"
		FROM "book"

		JOIN "user_has_book" ON "user_has_book"."book_id" = "book"."id"
		JOIN "user" ON "user"."id" = "user_has_book"."user_id"

		WHERE "book"."id" = $1 AND "user_has_book"."availability" = 'disponible'`

		const result = await client.query(query, [bookId]);
		console.log("laaaaaaaaa dt mapper result de getAllBooksAvailable: ", result);
		return result.rows;
	},

	getAllUserBooks: async (userId) => {
		const query = `SELECT book.*, "work"."title", "work"."resume", "author"."name", "category"."name" AS category_name, "user_has_book".*, "book"."height" || ' cm x ' || "book"."width" || ' cm x ' || "book"."thickness" || ' cm' AS "format"
		FROM "book"

		JOIN "work" ON "work"."id" = "book"."work_id" 
		JOIN "author_has_work" ON "author_has_work"."id" = "work"."id"
		JOIN "author" ON "author"."id" = "author_has_work"."author_id"
		JOIN "category" ON "category"."id" = "work"."category_id"
		JOIN "user_has_book" ON "user_has_book"."book_id" = "book"."id"

		WHERE "user_has_book"."user_id" = $1 AND "user_has_book"."availability" = 'disponible'`

		const result = await client.query(query, [userId]);
		console.log("laaaaaaaaa dt mapper result de getAllBooksAvailable: ", result);
		return result.rows;
	}

};

module.exports = dataMapper;