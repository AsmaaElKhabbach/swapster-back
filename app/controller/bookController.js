const dataMapper = require('../dataMapper');

const bookController = {

	//book/
	// allBooks: async (req, res) => {
	// const book = { 
	//     isbn_13: req.body.isbn_13,
	//     cover_page: req.body.cover_page,
	//     editor: req.body.editor,
	//     publication_date: req.body.publication_date,
	//     language: req.body.language,
	//     pages_number: req.body.pages_number,
	//     height: req.body.height,
	//     width: req.body.width,
	//     thickness: req.body.thickness,
	//     work_id: req.body.work_id
	//     };
	//     try {
	//         const bookData = await dataMapper.findByPk(bookId);
	//         res.status(201).json(bookData);
	//       } catch(err) {
	//         res.status(500);
	//       }
	// }


	//book/:bookId
	// oneBook: async (req, res) => {
	// 	try {
	// 		const bookData = await dataMapper.findByPk(bookId);
	// 		res.status(201).json(bookData);
	// 	} catch(err) {
	// 		res.status(500);
	// 	}
	// }


	latestbooks: async (req, res) => {
		try {
			const latestBooks = await dataMapper.getLatestBooks();
			console.log("latestBooks :", latestBooks);
			res.status(201).json(latestBooks);
			return;
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification des books dans la BDD"});
			return;
		}
	},


	searchBook: async (req, res) => {

		try {
			const { search } = req.body
			const checkBook = await dataMapper.searchBook(search)
			return res.status(200).json(checkBook)

		} catch (error) {
			res.status(500).json({ error: "Problème lors de la requête en BDD" });
			return;
		}

	},

	// Methode pour afficher les détails d'un livre
	bookDetails: async (req,res) => {
		// on vérifie que l'id du livre est bien dans la BDD
		let checkBook;
		try {
			checkBook =  await dataMapper.getOneBook(req.params.bookId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du livre dans la BDD"});
			return;
		}

		if (!checkBook) {
			res.status(404).json({error: `Pas de livre avec l'id ${req.params.bookId}`});
			return;
		}

		res.status(201).json(checkBook);
		return;

	},
}
module.exports = bookController;