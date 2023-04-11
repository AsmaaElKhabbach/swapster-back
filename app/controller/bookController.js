const dataMapper = require('../dataMapper');

const bookController = {

	// POST /book/search

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



	//book/:bookId
	oneBook: async (req, res) => {
		const bookId = Number(req.params.id);


		try {
			const bookData = await dataMapper.findByPk(bookId);
			res.status(201).json(bookData);
		} catch (err) {
			res.status(500);
		}
	},

	// PATCH /book/:bookId/my
	updatedUserBook: async (req, res) => {

		try {
			// On récupère le bookId dans req.params
			const { bookId } = req.params;
			const { userId, disponibility, status } = req.body

			// On vérifie si le livre est en bdd
			const checkBook = await dataMapper.getOneBookById(bookId)
			// Si on ne trouve pas le livre on renvoie un message d'erreur
			if (!checkBook) {
				return res.status(404).json({ error: `Le livre avec l'id ${bookId} n'existe pas` })
			}

			// On verifie si le user a déjà ce livre dans sa liste
			const checkUserHasBook = await dataMapper.checkUserHasBook(bookId, userId)


			if (checkUserHasBook) {
				// Si oui il peut modifier le status ou la dispo
				await dataMapper.updatedUserBook(bookId, userId, disponibility, status)

			}

			// Si le livre est présent en bdd on l'ajoute à la table user_has_book

			const userHasBook = {
				book_id: bookId,
				user_id: userId,
				disponibility: disponibility,
				status: status
			}
			await dataMapper.addBookToUser(userHasBook)

			res.status(201).json({ message: "Le livre est ajouté à la liste de livre à donner" })

		} catch (error) {
			res.status(500).json({ error: "Le livre n'a pas pu être ajouté à la liste" })

		}
	}


}



module.exports = bookController;