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
	}
}



module.exports = bookController;