const APIError = require('./APIError');
const logger = require('../../services/logger')

const errorHandler = {

	manage: ((error, req, res, next) => {
		// Si l'erreur est une instance d'APIError on renvoie le status et le message 
		if (error instanceof APIError) {

			// On utilise Bunyan pour stocker les erreurs
			logger.error(`APIError: ${error.message}`);

			return res.status(error.status).json({ error: error.message });
		}
		logger.error(`Unexpected error: ${error.message}`);

		return res.status(500).json({ error: `erreur inattendue : ${error.message}` });
	})
};


module.exports = errorHandler;


