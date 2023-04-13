const dataMapper = require('../dataMapper');

const bookController = {

	// Méthode pour afficher les 10 derniers livres
	latestbooks: async (req, res) => {
		try {
			const latestBooks = await dataMapper.getLatestBooks();
			console.log("latestBooks :", latestBooks);
			res.status(201).json(latestBooks);
			return;
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification des books dans la BDD" });
			return;
		}
	},

	// Methode pour afficher les recherches d'un livre
	searchBook: async (req, res) => {

		try {
			const { search } = req.body
			const checkBook = await dataMapper.searchBook(search)

			if (checkBook.length === 0) {
				return res.status(200).json({ message: "Aucun résultat pour cette recherche" })
			} else {

				return res.status(200).json(checkBook)
			}
		} catch (error) {
			res.status(500).json({ error: "Problème lors de la requête en BDD" })
		}

	},

	// Methode pour afficher les détails d'un livre
	bookDetails: async (req, res) => {
		// on vérifie que l'id du livre est bien dans la BDD
		let checkBook;
		try {
			checkBook = await dataMapper.getOneBookById(req.params.bookId);
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification du livre dans la BDD" });
			return;
		}

		if (!checkBook) {
			res.status(404).json({ error: `Pas de livre avec l'id ${req.params.bookId}` });
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
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification du livre dans la BDD" });
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
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification des books dans la BDD" });
			return;
		}
	},

	userBooks: async (req, res) => {
		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (err) {
			console.log(req.userId);
			res.status(500).json({ error: "Problème de requête lors de la vérification du user dans la BDD" });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}
	},

	// PATCH /book/:bookId/my

	updatedUserBook: async (req, res) => {
		let userHasBookChanged = 0;
		const { bookId } = req.params;

		// on vérifie que l'id du livre est bien dans la BDD
		let checkBook;

		try {
			checkBook = await dataMapper.getOneBookById(bookId);
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification du livre dans la BDD" });
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
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification du user dans la BDD" });
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
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification du user et du livre dans la BDD" });
			return;
		}

		if (!checkUserHasBook) {
			res.status(404).json({ error: `Pas de livre pour cet user.` });
			return;
		}

		// on récupère les données du front
		console.log("body", req.body);

		const { availability, status } = req.body;
		console.log("availability", availability);
		console.log("status", status);

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
		} catch (err) {
			console.log("error : ", err);
			res.status(500).json({ error: "Problème de requête lors de la mise à jour de user_has_book dans la BDD" });
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
			return res.status(500).json({ error: error })

		}
	}
}

// DELETE /book/:bookId/my
// Methode pour DELETE book dans user_has_book

// if (checkUserHasBook) {
// 		// Ou supprimer le livre de la userlist
// 		await dataMapper.deleteUserBook(id)
// 		res.status(201).json({ message: "Le livre est supprimé de la liste des livres à donner" })
// 	}



module.exports = bookController;