const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');

const userController = {

	// Méthode pour créer un compte utilisateur
	signup: async (req, res) => {
		try {
			const { name, email, city, password } = req.body;

			// On verifie s'il n'y a pas de doublon dans la BDD
			const checkUserName = await dataMapper.getOneUserByName(name);

			if (checkUserName) {
				res.status(500).json({ error: "pseudo (name) déjà utilisé" });
				return;
			};

			const checkUserEmail = await dataMapper.getOneUserByEmail(email);


			if (checkUserEmail) {
				res.status(500).json({ error: "email déjà utilisé" });
				return;
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
			console.log(error);
			res.status(500).json({ error });
			return;
		}
	},

	// Methode pour afficher les détails d'un utilisateur 
	userDetails: async (req, res) => {
		// On vérifie que l'id de l'utilisateur est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}

		res.status(201).json(checkUser);
		return;

	},

	// Méthode pour mise à jour de l'utilisateur
	update: async (req, res) => {
		// Pour savoir s'il y a eu une modif sur l'utilisateur : 0 = pas de modif ; 1 = modif
		let userHasChanged = 0;

		// On vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}

		// On récupère les données du front
		const { name, email, city, password } = req.body;

		// On vérifie s'il y a eu du changement sur le nom du l'utilisateur
		if (name && name !== checkUser.name) {
			let checkUserName;

			try {
				checkUserName = await dataMapper.getOneUserByName(name);
			} catch (error) {
				res.status(500).json({ error });
				return;
			}

			if (checkUserName) {
				res.status(404).json({ error: `le name ${name} existe déjà` });
				return;
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
				res.status(500).json({ error });
				return;
			}

			if (checkUserEmail) {
				res.status(404).json({ error: `l'email ${email} existe déjà` });
				return;
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
				res.status(400).json({ error: "le mot de passe est le même" });
				return;
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
			res.status(500).json({ error });
			return;
		}
	},

	// Méthode pour supprimer le user
	delete: async (req, res) => {

		// On vérifie que l'id de l'utilisateur est bien dans la bdd
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (error) {
			res.status(500).json({ error });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}

		// On le supprime de la BDD
		try {
			await dataMapper.deleteUser(req.userId);
			res.status(200).json({ info: "User correctement supprimé" });
			return;
		} catch (error) {
			res.status(500).json({ error });
			return;
		}
	}
};


module.exports = userController;