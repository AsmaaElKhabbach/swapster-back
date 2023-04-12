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

	// Méthode pour afficher les 10 derniers livres
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

	// Methode pour afficher les recherches d'un livre
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
			checkBook =  await dataMapper.getOneBookById(req.params.bookId);
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

	// Methode pour afficher tous les users pour un livre
	allUsersByBookId: async (req,res) => {
		let checkBook;
		try {
			checkBook =  await dataMapper.getOneBookById(req.params.bookId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du livre dans la BDD"});
			return;
		}

		if (!checkBook) {
			res.status(404).json({error: `Pas de livre avec l'id ${req.params.bookId}`});
			return;
		}

		try {
			const availableBooks = await dataMapper.getAllBooksAvailable(req.params.bookId);
			console.log("availableBooks :", availableBooks);
			res.status(201).json(availableBooks);
			return;
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification des books dans la BDD"});
			return;
		}
	},

	userBooks: async(req,res) => {
		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser =  await dataMapper.getOneUserById(req.userId);
		} catch(err) {
			console.log(req.userId);
			res.status(500).json({error:"Problème de requête lors de la vérification du user dans la BDD"});
			return;
		}

		if (!checkUser) {
			res.status(404).json({error: `Pas de user avec l'id ${req.userId}`});
			return;
		}

		try {
			const userbooks = await dataMapper.getAllUserBooks(req.userId);
			console.log("userbooks :", userbooks);
			res.status(201).json(userbooks);
			return;
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification des books dans la BDD"});
			return;
		}

	}
}
module.exports = bookController;