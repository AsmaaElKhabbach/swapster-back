const schema = require('./schema');
const APIError = require('../utils/error/APIError');

// Validation des données récupéré dans le req.body ou req.query
const validation = {
	signup(req, res, next) {
		const { error } = schema.signup.validate(req.body, { abortEarly: false });
		if (error) {
			return next(new APIError(400, error.details.map(d => d.message).join(', ')));
		}
		next();
	},

	login(req, res, next) {
		const { error } = schema.login.validate(req.body, { abortEarly: false });
		if (error) {
			return next(new APIError(400, error.details.map(d => d.message).join(', ')));
		}
		next();
	},

	userId(req, res, next) {
		const { error } = schema.userId.validate(req.userId, { abortEarly: false });
		if (error) {
			return next(new APIError(400, error.details.map(d => d.message).join(', ')));
		}
		next();
	},

	updateUser(req, res, next) {
		const { error } = schema.updateUser.validate(req.body, { abortEarly: false });
		if (error) {
			return next(new APIError(400, error.details.map(d => d.message).join(', ')));
		}
		next();
	},

	searchBook(req, res, next) {
		const { error } = schema.searchBook.validate(req.query, { abortEarly: false });
		if (error) {
			return next(new APIError(400, error.details.map(d => d.message).join(', ')));
		}
		next();
	},

	bookId(req, res, next) {
		const { error } = schema.bookId.validate(req.params.bookId, { abortEarly: false });
		if (error) {
			return next(new APIError(400, error.details.map(d => d.message).join(', ')));
		}
		next();
	},

	updateUserBook(req, res, next) {
		const { error } = schema.updateUserBook.validate(req.body, { abortEarly: false });
		if (error) {
			return next(new APIError(400, error.details.map(d => d.message).join(', ')));
		}
		next();
	},
	addUserBook(req, res, next) {
		const { error } = schema.addUserBook.validate(req.body, { abortEarly: false });
		if (error) {
			return next(new APIError(400, error.details.map(d => d.message).join(', ')));
		}
		next();
	}


};

module.exports = validation;