const APIError = require('./APIError');

const errorHandler = {

	manage : ((error, req, res, next) => {
		if (error instanceof APIError) {
			return res.status(error.status).json({ error: error.message });
		}
		return res.status(500).json({ error: `erreur inattendue : ${ error.message }` });
	})
};


module.exports = errorHandler;


