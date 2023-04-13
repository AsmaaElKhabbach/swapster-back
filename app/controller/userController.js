const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');



const userController = {

	// Méthode pour un nouvel user
	signup: async (req, res) => {
		try {
			const { name, email, city, password, passwordConfirm } = req.body;
			
			// on verifie s'il n'y a pas de doublon dans la BDD
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

			// on crée un objet user
			const user = {
				name: name,
				email: email,
				city: city,
				password: await bcrypt.hash(password, 10)
			};

			// on insert l'objet dans la BDD
			const userData = await dataMapper.insertUser(user);


			res.status(201).json(userData);
			return;

		} catch (err) {
			console.log(err);
			res.status(500).json({ error: "Erreur lors de l'insertion de l'utilisateur dans la base de données" });
			return;
		}
	},

	// Methode pour afficher les détails d'un user 
	userDetails: async (req, res) => {
		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser =  await dataMapper.getOneUserById(req.userId);
		} catch(err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification du user dans la BDD" });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}

		res.status(201).json(checkUser);
		return;

	},

	// Méthode pour MAJ le user
	update: async (req, res) => {
		// pour savoir s'il y a eu une modif sur le user : 0 = pas de modif ; 1 = modif
		let userHasChanged = 0;

		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification du user dans la BDD" });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}

		// on récupère les données du front
		const { name, email, city, password, passwordConfirm } = req.body;

		// on vérifie s'il y a eu du changement sur le name du user
		if (name && name !== checkUser.name) {
			let checkUserName;

			try {
				checkUserName = await dataMapper.getOneUserByName(name);
			} catch (err) {
				res.status(500).json({ error: "Problème de requête lors de la vérification du userName dans la BDD" });
				return;
			}

			if (checkUserName) {
				res.status(404).json({ error: `le name ${name} existe déjà` });
				return;
			}

			// mise à jour dans la variable checkUser
			checkUser.name = name;
			userHasChanged = 1;
		}

		// on vérifie s'il y a eu du changement sur l'email du user
		if (email && email !== checkUser.email) {
			let checkUserEmail;

			try {
				checkUserEmail = await dataMapper.getOneUserByEmail(email);
			} catch (err) {
				res.status(500).json({ error: "Problème de requête lors de la vérification du userEmail dans la BDD" });
				return;
			}

			if (checkUserEmail) {
				res.status(404).json({ error: `l'email ${email} existe déjà` });
				return;
			};

			// mise à jour dans la variable checkUser
			checkUser.email = email;
			userHasChanged = 1;
		}

		// on vérifie s'il y a eu du changement sur le city du user
		if (city && city !== checkUser.city) {

			// mise à jour dans la variable checkUser
			checkUser.city = city;
			userHasChanged = 1;
		}

		// on vérifie s'il y a eu du changement sur le password du user
		if (password) {

			const hashPassword = await bcrypt.hash(password, 10);

			if (hashPassword == checkUser.password) {
				res.status(400).json({ error: "le mot de passe est le même" });
				return;
			}

			// mise à jour dans la variable checkUser
			checkUser.password = hashPassword;
			userHasChanged = 1;
		}

		// est-ce qu'il y a eu du changement ?
		if (userHasChanged == 0) {
			res.status(200).json({ warn: "Pas de changement" });
			return;
		}

		// mise à jour  en BDD
		try {
			await dataMapper.updateUser(checkUser);
			res.status(201).json(checkUser);
			return;
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la mise à jour du user dans la BDD" });
			return;
		}
	},

	// Méthode pour supprimer le user
	delete: async (req, res) => {

		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser = await dataMapper.getOneUserById(req.userId);
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la vérification du user dans la BDD" });
			return;
		}

		if (!checkUser) {
			res.status(404).json({ error: `Pas de user avec l'id ${req.userId}` });
			return;
		}

		// on le supprime de la BDD
		try {
			await dataMapper.deleteUser(req.userId);
			res.status(200).json({ info: "User correctement supprimé" });
			return;
		} catch (err) {
			res.status(500).json({ error: "Problème de requête lors de la suppression du user dans la BDD" });
			return;
		}
	}
};


module.exports = userController;