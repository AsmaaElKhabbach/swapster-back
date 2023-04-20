const dataMapper = require('../dataMapper');
const APIError = require('../utils/error/APIError');

const userHasBookController = {

	// Methode pour afficher les livres à donner d'un utilisateur
	userBooks: async (req, res, next) => {
		// On vérifie que l'id de l'utilisateur est bien dans la bdd
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			return next(new APIError(500, error.message));
		}
		// Si l'utilisateur n'existe pas en bdd on renvoie une erreur
		if (!checkUser) {
			return next(new APIError(404, `Pas de user avec l'id ${req.userId}`));
		}

		try {
			// On interroge la bdd et on renvoie les livres de l'utilisateur
			const userbooks = await dataMapper.getAllUserBooks(req.userId);

			// On vérifie si l'utilisateur a des livres
			if (userbooks.length == 0) {
				return next(new APIError(404, `Pas de livre pour cet utilisateur`));
			}
			res.status(200).json(userbooks);
			return;
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	},

	// Méthode pour mettre à jour le statut et la disponibilité d'un livre d'un utilisateur
	updatedUserBook: async (req, res, next) => {
		// Pour savoir s'il y a eu une modif sur le userHasBookChanged : 0 = pas de modif ; 1 = modif
		let userHasBookChanged = 0;
		const { bookId } = req.params;

		// On vérifie que l'id du livre est bien dans la bdd
		let checkBook;
		try {
			checkBook = await dataMapper.getOneBookById(bookId);
		} catch (error) {
			return next(new APIError(500, error.message));
		}

		// Si le livre n'est pas en bdd on renvoie une erreur
		if (!checkBook) {
			return next(new APIError(404, `Pas de livre avec l'id ${bookId}`));
		}

		// On vérifie que l'id de l'utilisateur existe bien en bdd
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			return next(new APIError(500, error.message));
		}
		// Si l'utilisateur n'existe pas on renvoie une erreur
		if (!checkUser) {
			return next(new APIError(404, `Pas de user avec l'id ${req.userId}`));
		}

		// On vérifie que l'utilisateur a bien le livre
		let checkUserHasBook;
		try {
			checkUserHasBook = await dataMapper.getUserHasBookByBookIdAndUserId(bookId, req.userId);
		} catch (error) {
			return next(new APIError(500, error.message));
		}

		// Si le livre n'est pas rattaché à l'utilisateur on renvoie une erreur
		if (!checkUserHasBook) {
			return next(new APIError(404, `Pas de livre pour cet user.`));
		}

		// On récupère les données du front
		const { availability, status } = req.body;

		// On vérifie s'il y a eu du changement sur la disponibilité du livre
		if (availability && availability !== checkUserHasBook.availability) {

			// Mise à jour dans la variable checkUser
			checkUserHasBook.availability = availability;
			userHasBookChanged = 1;
		}

		// On vérifie s'il y a eu du changement sur l'état du livre
		if (status && status !== checkUserHasBook.status) {

			// Mise à jour dans la variable checkUser
			checkUserHasBook.status = status;
			userHasBookChanged = 1;
		}

		// Est-ce qu'il y a eu du changement ?
		if (userHasBookChanged == 0) {
			return next (new APIError(409, "Pas de changement"));
		}

		// Mise à jour en bdd
		try {
			await dataMapper.updatedUserBook(checkUserHasBook);
			res.status(201).json(checkUserHasBook);
			return;
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	},

	// Methode pour ajouter un livre à la liste d'un utilisateur
	addUserBook: async (req, res, next) => {
		const { bookId } = req.params;

		// On vérifie que l'id du livre est bien dans la bdd
		try {
			checkBook = await dataMapper.getOneBookById(bookId);

			// On renvoie un message d'erreur si le livre n'est pas dans la bdd
			if (!checkBook) {
				return next(new APIError(404, `Pas de livre avec l'id ${bookId}`));
			}

			// On vérifie que l'utilisateur est bien dans la bdd
			checkUser = await dataMapper.getOneUserById(req.userId);

			// On renvoie un message d'erreur si l'utilisateur n'est pas dans la bdd
			if (!checkUser) {
				return next(new APIError(404, `Pas de user avec l'id ${req.userId}`));
			}

			// Si l'utilisateur a déjà le livre dans sa liste on envoie un message d'erreur 
			checkUserHasBook = await dataMapper.getUserHasBookByBookIdAndUserId(bookId, req.userId);
			if (checkUserHasBook) {
				return next(new APIError(409, `Ce livre est déjà présent dans la liste des livres à donner`));
			}

			// On ajoute le livre à liste des livres à donner de l'utilisateur
			const { status } = req.body;

			await dataMapper.addBookToUser(bookId, req.userId, status);
			return res.status(201).json({ message: `Le livre ${bookId} est ajouté à la liste` });
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	},


	// Methode pour supprimer un livre de la liste des livres à donner d'un utilisateur
	deleteUserBook: async (req, res, next) => {
		const { bookId } = req.params;

		try {
			// On vérifie que l'id du livre est bien dans la bdd
			checkBook = await dataMapper.getOneBookById(bookId);

			// On renvoie un message d'erreur si le livre n'est pas dans la bdd
			if (!checkBook) {
				return next(new APIError(404, `Pas de livre avec l'id ${bookId}`));
			}

			// On vérifie que l'utilisateur est bien dans la bdd
			checkUser = await dataMapper.getOneUserById(req.userId);

			// On renvoie un message d'erreur si l'utilisateur n'est pas dans la bdd
			if (!checkUser) {
				return next(new APIError(404, `Pas de user avec l'id ${req.userId}`));
			}

			// On vérifie si l'utilisateur a bien le livre dans sa liste
			checkUserHasBook = await dataMapper.getUserHasBookByBookIdAndUserId(bookId, req.userId);

			// Si le livre n'est pas dans la liste à donner on renvoie une erreur
			if (!checkUserHasBook) {
				return next(new APIError(404, `Pas de livre avec l'id ${bookId} dans votre liste à donner`));
			} else {
				// Sinon on supprime le livre de la liste à donner
				await dataMapper.deleteUserBook(bookId, req.userId)
				return res.status(200).json({ message: `Le livre avec l'id ${bookId} est supprimé de la liste des livres à donner` });
			}
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	},

	// Methode pour afficher les livres donnés d'un utilisateur
	givenUserBook: async (req, res, next) => {
		// On vérifie que l'utilisateur est bien dans la bdd
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			return next(new APIError(500, error.message));
		}

		// On renvoie un message d'erreur si l'utilisateur n'est pas dans la bdd
		if (!checkUser) {
			return next(new APIError(404, `Pas de user avec l'id ${req.userId}`));
		}

		try {
			// On recherche la liste des livres donnés par l'utilisateur
			const userGivenBook = await dataMapper.getGivenBookUser(req.userId);

			// Si elle est vide on renvoie un message
			if (userGivenBook.length === 0) {
				return next(new APIError(404, "Aucun livre donné"));
				// Sinon on retourne la liste des livres donnés
			} else {
				return res.status(200).json(userGivenBook);
			}
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	},

	// Methode pour afficher tous les utilisateur qui donne un livre
	allUsersByBookId: async (req, res, next) => {
		// On vérifie que l'id du livre est bien dans la bdd
		let checkBook;
		try {
			checkBook = await dataMapper.getOneBookById(req.params.bookId);
		} catch (error) {
			return next(new APIError(500, error.message));
		}
		//  Si le livre n'est pas en bdd on renvoie une erreur
		if (!checkBook) {
			return next(new APIError(404, `Pas de livre avec l'id ${req.params.bookId}`));
		}

		try {
			// On renvoie le resultat de la requête
			const availableBooks = await dataMapper.getAllBooksAvailable(req.params.bookId);
			res.status(200).json(availableBooks);
			return;
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	},

	// Methode pour afficher tous les utilisateur qui donne un livre
	allUsersByBookId: async (req, res) => {
		// On vérifie que l'id du livre est bien dans la bdd
		let checkBook;
		try {
			checkBook = await dataMapper.getOneBookById(req.params.bookId);
		} catch (error) {
			return next(new APIError(500, error.message));

		}
		//  Si le livre n'est pas en bdd on renvoie une erreur
		if (!checkBook) {
			return next(new APIError(404, `Pas de livre avec l'id ${req.params.bookId}`));

		}

		try {
			// On renvoie le resultat de la requête
			const availableBooks = await dataMapper.getAllBooksAvailable(req.params.bookId);
			res.status(200).json(availableBooks);
			return;
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	}
};

module.exports = userHasBookController;