const tokenService = require('../services/token');
const APIError = require('../utils/error/APIError');

const authentication = {
	validateToken: (req, res, next) => {
		// On récupère dans le headers le token
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];
		// On retourne une erreur si le token est null
		if (token == null) return next(new APIError(401, "token null"));
		// On verifie que le token utilise le Token_Secret
		const userId = tokenService.verifyToken(token);
		// On retourne une erreur si le token est invalide
		if (!userId) return next(new APIError(403, "token invalide"));
		// On ajoute le userId dans l'objet req pour une utilisation futur
		req.userId = userId;
		next();
	}
};

module.exports = authentication;