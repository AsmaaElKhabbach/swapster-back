const jwt = require('jsonwebtoken');

const authentication = {
	validateToken (req, res, next) {
		const authHeader = req.headers['authorization']
		const token = authHeader && authHeader.split(' ')[1]

		if (token == null) return res.status(401).json({error: "token null" });

		jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
			// console.log(err)

			if (err) return res.status(403).json({error: "token invalide" });

			req.userId = payload.userId;
			next();
		});
	}
};

module.exports = authentication;