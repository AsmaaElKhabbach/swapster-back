const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');
const tokenService = require('../services/token');
const APIError = require('../utils/error/APIError');

const sessionController = {

	// Methode pour se connecter à un compte utilisateur
	login: async (req, res, next) => {
		try {
			// On récupère l'email et le password dans le body
			const { email, password } = req.body;

			// On stock le resultat de la requête
			const user = await dataMapper.getOneUserByEmail(email.toLowerCase());

			// On vérifie que l'email correspond 
			if (!user) {
				return next(new APIError(401, "Email ou mot de passe incorrect"));
			}
			// On vérifie que le mot de passe correspond avec bcrypt
			const passwordIsGood = await bcrypt.compare(password, user.password);

			if (!passwordIsGood) {
				return next(new APIError(401, "Email ou mot de passe incorrect"));
			}

			// On crée un token qui va créer une propriété dans user et on le renvoie au client 
			user.token = tokenService.createToken(user.id);
			return res.status(202).json(user);

		} catch (error) {
			return next(new APIError(500, error.message));S
		}
	},

	// Methode pour se deconnecter
	logout: async (req, res, next) => {
		try {
			// On retire le token de Authorization header
			req.headers.authorization = null;
			// On renvoie un message à l'utilisateur
			res.status(200).json({ message: "Vous êtes bien déconnecté" });
		} catch (error) {
			return next(new APIError(500, error.message));
		}
	}
};

module.exports = sessionController;