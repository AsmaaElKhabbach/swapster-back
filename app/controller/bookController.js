const dataMapper = require('../dataMapper');

const bookController = {

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