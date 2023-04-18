const dataMapper = require('../dataMapper');
const bookController = {

	// Méthode pour afficher les 10 derniers livres
	latestbooks: async (req, res) => {
		try {
			const latestBooks = await dataMapper.getLatestBooks();
			res.status(201).json(latestBooks);
			return;
		} catch (error) {
			res.status(500).json({ error });
			return;
		}
	},

	// Methode pour afficher le résultat d'une recherches de livre
	searchBook: async (req, res) => {

		try {
			const { query } = req.query;
			// On interroge notre bdd
			const checkBook = await dataMapper.searchBook(query);
			// Si le resultat de la recherche est vide on renvoie un message
			if (checkBook.length === 0) {
				return res.status(200).json({ message: "Aucun résultat pour cette recherche" });
			} else {
				// Sinon on retourne le resultat de la recherche
				return res.status(200).json(checkBook);
			}
		} catch (error) {
			res.status(500).json({ error });
		}

	},

	// Methode pour afficher les détails d'un livre
	bookDetails: async (req, res) => {
		// On vérifie que l'id du livre est bien dans la bdd
		let checkBook;
		try {
			checkBook = await dataMapper.getOneBookById(req.params.bookId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}
		//  Si le livre n'est pas en bdd on renvoie une erreur
		if (!checkBook) {
			res.status(404).json({ error: `Pas de livre avec l'id ${req.params.bookId}` });
			return;
		}
		res.status(201).json(checkBook);
		return;
	},

	// Methode pour afficher tous les utilisateur qui donne un livre
	allUsersByBookId: async (req, res) => {
		// On vérifie que l'id du livre est bien dans la bdd
		let checkBook;
		try {
			checkBook = await dataMapper.getOneBookById(req.params.bookId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}
		//  Si le livre n'est pas en bdd on renvoie une erreur
		if (!checkBook) {
			res.status(404).json({ error: `Pas de livre avec l'id ${req.params.bookId}` });
			return;
		}

		try {
			// On renvoie le resultat de la requête
			const availableBooks = await dataMapper.getAllBooksAvailable(req.params.bookId);
			res.status(201).json(availableBooks);
			return;
		} catch (error) {
			res.status(500).json({ error });
			return;
		}
	}

}

module.exports = bookController;