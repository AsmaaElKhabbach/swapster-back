const dataMapper = require('../dataMapper');

const bookController = {

	// Méthode pour afficher les 10 derniers livres
	latestbooks: async (req, res) => {
		try {
			const latestBooks = await dataMapper.getLatestBooks();
			console.log("latestBooks :", latestBooks);
			res.status(201).json(latestBooks);
			return;
		} catch (error) {
			res.status(500).json({ error });
			return;
		}
	},

	// Methode pour afficher les recherches d'un livre
	searchBook: async (req, res) => {

		try {
			const { query } = req.query
			const checkBook = await dataMapper.searchBook(query)

			if (checkBook.length === 0) {
				return res.status(200).json({ message: "Aucun résultat pour cette recherche" })
			} else {

				return res.status(200).json(checkBook)
			}
		} catch (error) {
			res.status(500).json({ error })
		}

	},

	// Methode pour afficher les détails d'un livre
	bookDetails: async (req, res) => {
		// on vérifie que l'id du livre est bien dans la BDD
		let checkBook;
		try {
			checkBook = await dataMapper.getOneBookById(req.params.bookId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}

		if (!checkBook) {
			res.status(404).json({ error });
			return;
		}

		res.status(201).json(checkBook);
		return;
	},

	// Methode pour afficher tous les users pour un livre
	allUsersByBookId: async (req, res) => {
		let checkBook;
		try {
			checkBook = await dataMapper.getOneBookById(req.params.bookId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}

		if (!checkBook) {
			res.status(404).json({ error: `Pas de livre avec l'id ${req.params.bookId}` });
			return;
		}

		try {
			const availableBooks = await dataMapper.getAllBooksAvailable(req.params.bookId);
			console.log("availableBooks :", availableBooks);
			res.status(201).json(availableBooks);
			return;
		} catch (error) {
			res.status(500).json({ error });
			return;
		}
	},

	userBooks: async (req, res) => {
		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			console.log(req.userId);
			res.status(500).json({ error });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}

		try {
			const userbooks = await dataMapper.getAllUserBooks(req.userId);
			console.log("userbooks :", userbooks);
			res.status(201).json(userbooks);
			return;
		} catch (error) {
			res.status(500).json({ error });
			return;
		}
	},

	// PATCH /book/:bookId/my

	updatedUserBook: async (req, res) => {
		// pour savoir s'il y a eu une modif sur le user_has_book : 0 = pas de modif ; 1 = modif
		let userHasBookChanged = 0;
		const { bookId } = req.params;

		// on vérifie que l'id du livre est bien dans la BDD
		let checkBook;

		try {
			checkBook = await dataMapper.getOneBookById(bookId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}

		if (!checkBook) {
			res.status(404).json({ error: `Pas de livre avec l'id ${bookId}` });
			return;
		}

		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}

		// on vérifie que le user a bien le livre
		let checkUserHasBook;
		try {
			checkUserHasBook = await dataMapper.getUserHasBookByBookIdAndUserId(bookId, req.userId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}

		if (!checkUserHasBook) {
			res.status(404).json({ error: `Pas de livre pour cet user.` });
			return;
		}

		// on récupère les données du front
		const { availability, status } = req.body

		// on vérifie s'il y a eu du changement sur la disponibilité du livre
		if (availability && availability !== checkUserHasBook.availability) {

			// mise à jour dans la variable checkUser
			checkUserHasBook.availability = availability;
			userHasBookChanged = 1;
		}

		// on vérifie s'il y a eu du changement sur l'état du livre
		if (status && status !== checkUserHasBook.status) {

			// mise à jour dans la variable checkUser
			checkUserHasBook.status = status;
			userHasBookChanged = 1;
		}

		// est-ce qu'il y a eu du changement ?
		if (userHasBookChanged == 0) {
			res.status(200).json({ warn: "Pas de changement" });
			return;
		}

		// mise à jour  en BDD
		try {
			await dataMapper.updatedUserBook(checkUserHasBook);
			res.status(201).json(checkUserHasBook);
			return;
		} catch (error) {
			console.log("error : ", err);
			res.status(500).json({ error });
			return;
		}
	},

	// Methode pour Ajouter un book à la liste d'un user
	// POST /book/:bookId/my


	addUserBook: async (req, res) => {
		const { bookId } = req.params;

		// On vérifie que l'id du livre est bien dans la BDD
		try {
			checkBook = await dataMapper.getOneBookById(bookId);

			// On renvoie un message d'erreur si le livre n'est pas dans la bdd
			if (!checkBook) {
				return res.status(400).json({ error: `Pas de livre avec l'id ${bookId}` });

			}
			// On vérifie que le user est bien dans la BDD

			checkUser = await dataMapper.getOneUserById(req.userId);

			// On renvoie un message d'erreur si l'user n'est pas dans la bdd
			if (!checkUser) {
				return res.status(400).json({ error: `Pas de user avec l'id ${req.userId}` });
			}

			// Si le user a déjà le livre dans sa liste on envoie un message d'erreur (pas de possibilité de doublon cas rare)

			checkUserHasBook = await dataMapper.getUserHasBookByBookIdAndUserId(bookId, req.userId);
			if (checkUserHasBook) {
				return res.status(400).json({ message: `Ce livre est déjà présent dans la liste des livres à donner` })
			}

			// On ajoute le livre à liste des livre à donner de l'user

			const { status } = req.body;

			await dataMapper.addBookToUser(bookId, req.userId, status)
			return res.status(201).json(`Le livre ${bookId} est ajouté à votre liste`)
		} catch (error) {
			return res.status(500).json({ error })

		}
	},

	// DELETE /book/:bookId/my
	// Methode pour DELETE book dans user_has_book
	deleteUserBook: async (req, res) => {
		const { bookId } = req.params;

		try {
			// On vérifie que l'id du livre est bien dans la BDD
			checkBook = await dataMapper.getOneBookById(bookId);

			// On renvoie un message d'erreur si le livre n'est pas dans la bdd
			if (!checkBook) {
				return res.status(400).json({ error: `Pas de livre avec l'id ${bookId}` });

			}
			// On vérifie que le user est bien dans la BDD

			checkUser = await dataMapper.getOneUserById(req.userId);

			// On renvoie un message d'erreur si l'user n'est pas dans la bdd
			if (!checkUser) {
				return res.status(400).json({ error: `Pas de user avec l'id ${req.userId}` });
			}
			// On vérifie si le user a bien le livre dans sa liste

			checkUserHasBook = await dataMapper.getUserHasBookByBookIdAndUserId(bookId, req.userId);

			// Si le livre n'est pas dans la liste à donner on renvoie une erreur
			if (!checkUserHasBook) {
				return res.status(400).json({ error: `Pas de livre avec l'id ${bookId} dans votre liste à donner` });

			} else {
				// Sinon supprime le livre de la userlist
				await dataMapper.deleteUserBook(bookId, req.userId)
				return res.status(201).json({ message: `Le livre avec l'id ${bookId} est supprimé de la liste des livres à donner` })
			}
		} catch (error) {
			return res.status(500).json({ error })
		}
	},

	givenUserBook: async (req, res) => {
		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;

		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			return res.status(500).json({ error });
		}
		// Si l'user est inconnu on renvoie une erreur
		if (!checkUser) {
			return res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
		}

		try {
			// On recherche la liste des livres donnés par l'user
			const userGivenBook = await dataMapper.getGivenBookUser(req.userId)
			// Si c'est vide on renvoie un message
			if (userGivenBook.length === 0) {
				return res.status(200).json({ message: "Aucun livre donné" })
				// Sinon on retourne la liste des livres
			} else {
				return res.status(201).json(userGivenBook)
			}
		} catch (error) {
			return res.status(500).json({ error });
		}

	}
}

module.exports = bookController;