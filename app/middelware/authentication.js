const jwt = require('jsonwebtoken');

const authentication = {
	validateToken: (req, res, next) => {
		// On récupère dans le headers le token
		const authHeader = req.headers['authorization']
		const token = authHeader && authHeader.split(' ')[1]
		// On retourne une erreur si le token est null
		if (token == null) return res.status(401).json({ error: "token null" });
		// On verifie que le token utilise le Token_Secret
		jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
			// On retourne une erreur si le token est invalide
			if (err) return res.status(403).json({ error: "token invalide" });
			// On ajoute le userId dans l'objet req pour une utilisation futur
			req.userId = payload.userId;
			next();
		});
	}
};

module.exports = authentication;