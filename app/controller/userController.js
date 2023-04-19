const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');
const APIError = require('../utils/error/APIError');

const userController = {

	// Méthode pour créer un compte utilisateur
	signup: async (req, res, next) => {
		try {
			const { name, email, city, password } = req.body;

			// On verifie s'il n'y a pas de doublon dans la BDD
			const checkUserName = await dataMapper.getOneUserByName(name);

			if (checkUserName) {
				return next (new APIError(409, "pseudo (name) déjà utilisé"));
			};

			const checkUserEmail = await dataMapper.getOneUserByEmail(email);


			if (checkUserEmail) {
				return next (new APIError(409, "email déjà utilisé"));
			};

			// On crée un objet user
			const user = {
				name: name,
				email: email,
				city: city,
				password: await bcrypt.hash(password, 10)
			};

			// On insert l'objet dans la BDD
			const userData = await dataMapper.insertUser(user);
			res.status(201).json(userData);
			return;

		} catch (error) {
			return next (new APIError(500, error.message));
		}
	},

	// Methode pour afficher les détails d'un utilisateur 
	userDetails: async (req, res, next) => {
		// On vérifie que l'id de l'utilisateur est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			return next (new APIError(500, error.message));
		}

		if (!checkUser) {
			return next (new APIError(404, `Pas de user avec l'id ${req.userId}`));
		}

		res.status(201).json(checkUser);
		return;

	},

	// Méthode pour mise à jour de l'utilisateur
	update: async (req, res, next) => {
		// Pour savoir s'il y a eu une modif sur l'utilisateur : 0 = pas de modif ; 1 = modif
		let userHasChanged = 0;

		// On vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			return next (new APIError(500, error.message));
		}

		if (!checkUser) {
			return next (new APIError(404, `Pas de user avec l'id ${req.userId}`));
		}

		// On récupère les données du front
		const { name, email, city, password } = req.body;

		// On vérifie s'il y a eu du changement sur le nom du l'utilisateur
		if (name && name !== checkUser.name) {
			let checkUserName;

			try {
				checkUserName = await dataMapper.getOneUserByName(name);
			} catch (error) {
				return next (new APIError(500, error.message));
			}

			if (checkUserName) {
				return next (new APIError(409, `le name ${name} existe déjà`));
			}

			// Mise à jour dans la variable checkUser
			checkUser.name = name;
			userHasChanged = 1;
		}

		// On vérifie s'il y a eu du changement sur l'email de l'utilisateur
		if (email && email !== checkUser.email) {
			let checkUserEmail;

			try {
				checkUserEmail = await dataMapper.getOneUserByEmail(email);
			} catch (error) {
				return next (new APIError(500, error.message));
			}

			if (checkUserEmail) {
				return next (new APIError(409, `l'email ${email} existe déjà`));
			};

			// Mise à jour dans la variable checkUser
			checkUser.email = email;
			userHasChanged = 1;
		}

		// On vérifie s'il y a eu du changement sur la ville de l'utilisateur
		if (city && city !== checkUser.city) {

			// Mise à jour dans la variable checkUser
			checkUser.city = city;
			userHasChanged = 1;
		}

		// On vérifie s'il y a eu du changement sur le password du user
		if (password) {

			const hashPassword = await bcrypt.hash(password, 10);

			if (hashPassword == checkUser.password) {
				return next (new APIError(409, "le mot de passe est le même"));
			}

			// Mise à jour dans la variable checkUser
			checkUser.password = hashPassword;
			userHasChanged = 1;
		}

		// Est-ce qu'il y a eu du changement ?
		if (userHasChanged == 0) {
			res.status(200).json({ warn: "Pas de changement" });
			return;
		}

		// Mise à jour en bdd
		try {
			await dataMapper.updateUser(checkUser);
			res.status(201).json(checkUser);
			return;
		} catch (error) {
			return next (new APIError(500, error.message));
		}
	},

	// Méthode pour supprimer le user
	delete: async (req, res, next) => {

		// On vérifie que l'id de l'utilisateur est bien dans la bdd
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			return next (new APIError(500, error.message));
		}

		if (!checkUser) {
			return next (new APIError(404, `Pas de user avec l'id ${req.userId}`));
		}

		// On le supprime de la BDD
		try {
			await dataMapper.deleteUser(req.userId);
			res.status(200).json({ info: "User correctement supprimé" });
			return;
		} catch (error) {
			return next (new APIError(500, error.message));
		}
	}
};


module.exports = userController;