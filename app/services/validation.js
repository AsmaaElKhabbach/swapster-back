const schema = require('./schema');

const validation = {
	signup(req, res, next) {
		const { error } = schema.signup.validate(req.body, { abortEarly: false })
		if (error) {
			return res.status(400).json({ error: error.details })
		}
		next();
	},

	login(req, res, next) {
		const { error } = schema.login.validate(req.body, { abortEarly: false })
		if (error) {
			return res.status(400).json({ error: error.details })
		}
		next();
	},

	userId(req, res, next) {
		const { error } = schema.userId.validate(req.userId, { abortEarly: false });
		if (error) {
			return res.status(400).json({ error: error.details });
		}
		next();
	},

	updateUser(req, res, next) {
		const { error } = schema.updateUser.validate(req.body, { abortEarly: false })
		if (error) {
			return res.status(400).json({ error: error.details });
		}
		next();
	},

	searchBook(req, res, next) {
		const { error } = schema.searchBook.validate(req.body, { abortEarly: false })
		if (error) {
			return res.status(400).json({ error: error.details });
		}
		next();
	},

	bookId(req, res, next) {
		const { error } = schema.bookId.validate(req.params.bookId, { abortEarly: false });
		if (error) {
			return res.status(400).json({ error: error.details });
		}
		next();
	},

	updateUserBook(req, res, next) {
		const { error } = schema.updateUserBook.validate(req.body, { abortEarly: false });
		if (error) {
			return res.status(400).json({ error: error.details });
		}
		next();
	},
	addUserBook(req, res, next) {
		const { error } = schema.addUserBook.validate(req.body, { abortEarly: false });
		if (error) {
			return res.status(400).json({ error: error.details });
		}
		next();
	}


};

module.exports = validation;