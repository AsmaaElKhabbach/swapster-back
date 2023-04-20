const dataMapper = require('../dataMapper');
const APIError = require('../utils/error/APIError');

const bookController = {

	// Méthode pour afficher les 5 derniers livres
	latestbooks: async (req, res, next) => {
		try {
			const latestBooks = await dataMapper.getLatestBooks();
			res.status(200).json(latestBooks);
			return;
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	},

	// Methode pour afficher le résultat d'une recherches de livre
	searchBook: async (req, res, next) => {
		try {
			const { query } = req.query;
			// On interroge notre bdd
			const checkBook = await dataMapper.searchBook(query);
			// Si le resultat de la recherche est vide on renvoie un message
			if (checkBook.length === 0) {
				return next(new APIError(404, "Aucun résultat pour cette recherche"));
			} else {
				// Sinon on retourne le resultat de la recherche
				return res.status(200).json(checkBook);
			}
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	},

	// Methode pour afficher les détails d'un livre
	bookDetails: async (req, res, next) => {
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
		res.status(200).json(checkBook);
		return;
	}
};

module.exports = bookController;