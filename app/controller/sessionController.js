const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sessionController = {

	// Methode pour se connecter à un compte utilisateur
	login: async (req, res) => {

		try {
			// On récupère l'email et le password dans le body
			const { email, password } = req.body;

			// On stock le resultat de la requête
			const user = await dataMapper.getOneUserByEmail(email);

			// On vérifie que l'email correspond 
			if (!user) {
				return res.status(401).json({ error: "Email ou mot de passe incorrect" });
			}
			// On vérifie que le mot de passe correspond avec bcrypt
			const passwordIsGood = await bcrypt.compare(password, user.password);

			if (!passwordIsGood) {
				return res.status(500).json({ error: "Email ou mot de passe incorrect" });
			}

			// On crée un token qui va créer une propriété dans user et on le renvoie au client 
			user.token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
			return res.status(201).json(user)

		} catch (error) {
			console.debug(error)
			res.status(500).json({ error });
		}
	},

	// Methode pour se deconnecter
	logout: async (req, res) => {
		try {
			// On retire le token de Authorization header
			req.headers.authorization = null;
			// On renvoie un message à l'utilisateur
			res.status(200).json({ message: "Vous êtes bien déconnecté" });
		} catch (error) {
			res.status(500).json({ error });
		}
	}
};

module.exports = sessionController;