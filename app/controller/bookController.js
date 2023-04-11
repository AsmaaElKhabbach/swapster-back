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
	}
}



module.exports = bookController;