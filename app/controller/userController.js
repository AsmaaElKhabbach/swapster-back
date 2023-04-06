const dataMapper = require('../dataMapper');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
// const jwt = require

const userController = {

	// Méthode pour un nouvel user

	signup: async (req, res) => {
		try {
			const { name, email, city, password, passwordConfirm } = req.body;
			console.log(req.body);
			if (!name) {
				res.status(500).json({error:"manque name"});
				return;
			};

			if (!city) {
				res.status(500).json({error:"manque city"});
				return;
			};

			if (!emailValidator.validate(email)) {
				res.status(500).json({error:"email invalide"});
				return;
			};

			const checkUserName = await dataMapper.getOneUserByName(name);

			if (checkUserName) {
				res.status(500).json({error:"pseudo (name) déjà utilisé"});
				return;
			};

			const checkUserEmail = await dataMapper.getOneUserByEmail(email);

			if (checkUserEmail) {
				res.status(500).json({error:"email déjà utilisé"});
				return;
			};    

			if (password !== passwordConfirm) {
				res.status(500).json({error:"Le mot de passe ne correspond pas."});
				return;
			};

			const user = {
				name: name,
				email: email,
				city: city,
				password: await bcrypt.hash(password, 10)
			};

			const userData = await dataMapper.insertUser(user);

			console.log(userData);
			res.status(201).json(userData);
			return;

		} catch(err) {
			console.log(err);
			res.status(500).json({error:"Erreur lors de l'insertion de l'utilisateur dans la base de données"});
			return;
		}		
	},

	// Methode pour afficher les détails d'un user 
	userDetails: async(req,res) => {
		// on vérifie dans la requête du front que l'id est bien un nombre
		if (req.params.userId.match(/^\d+$/) == null){
			res.status(400).json({error: `${req.params.userId} n'est pas un nombre`});
			return;
		} 
	
		// on convertit le userId en INT
		const userId = parseInt(req.params.userId);

		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
			//
		try {
			checkUser =  await dataMapper.getOneUser(userId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du user dans la BDD"});
			return;
		}

		if (!checkUser) {
			res.status(404).json({error: `Pas de user avec l'id ${userId}`});
			return;
		}

		// on va chercher le détail d'un user dans la BDD
		const userData = await dataMapper.getOneUser(userId);
		res.status(201).json(userData);
		return;

	},

	// Méthode pour MAJ le user
	update: async(req, res) => {
		// pour savoir s'il y a eu une modif sur le user : 0 = pas de modif ; 1 = modif
		let userHasChanged = 0;
	
		// on vérifie dans la requête du front que l'id est bien un nombre
		if (req.params.userId.match(/^\d+$/) == null){
			res.status(400).json({error: `${req.params.userId} n'est pas un nombre`});
			return;
		} 
	
		// on convertit le userId en INT
		const userId = parseInt(req.params.userId);

		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser =  await dataMapper.getOneUser(userId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du user dans la BDD"});
			return;
		}

		if (!checkUser) {
			res.status(404).json({error: `Pas de user avec l'id ${userId}`});
			return;
		}
		
		// on récupère les données du front
		const { name, email, city, password, passwordConfirm } = req.body;
		console.log(name);
		console.log(email);
		console.log(city);
		console.log(password);
		console.log(passwordConfirm);

		// on vérifie s'il y a eu du changement sur le name du user
		if (name && name !== checkUser.name) {
			let checkUserName;

			try {
				checkUserName = await dataMapper.getOneUserByName(name);
			} catch(err) {
				res.status(500).json({error:"Problème de requête lors de la vérification du userName dans la BDD"});
				return;
			}

			if (checkUserName) {
				res.status(404).json({error:`le name ${name} existe déjà`});
				return;
			}

			// mise à jour dans la variable checkUser
			checkUser.name = name;
			userHasChanged = 1;
		}
	
		// on vérifie s'il y a eu du changement sur l'email du user
		if (email && email !== checkUser.email) {
			// on vérifie si c'est un mail 	
			if (!emailValidator.validate(email)) {
				res.status(400).json({error:"email invalide"});
				return;
			};

			let checkUserEmail;

			try {
				checkUserEmail = await dataMapper.getOneUserByEmail(email);
			} catch(err) {
				res.status(500).json({error:"Problème de requête lors de la vérification du userEmail dans la BDD"});
				return;
			}

			if (checkUserEmail) {
				res.status(404).json({error:`l'email ${email} existe déjà`});
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
		if (password){
			if(!passwordConfirm){
				res.status(400).json({error: "pas de confirmation du password dans la requête"});
				return;
			}

			if (password !== passwordConfirm){
				res.status(400).json({error: "les 2 passwords sont différents"});
				return;
			}

			const hashPassword = await bcrypt.hash(password, 10);

			if (hashPassword == checkUser.password) {
				res.status(400).json({error: "le mot de passe est le même"});
				return;
			}

			// mise à jour dans la variable checkUser
			checkUser.password = hashPassword;
			userHasChanged = 1;
		}

		// est-ce qu'il y a eu du changement ?
		if (userHasChanged == 0) {
			res.status(200).json({warn: "Pas de changement"});
			return;
		}

		// mise à jour de user en BDD
		try {
			await dataMapper.updateUser(checkUser);
			res.status(201).json(checkUser);
			return;
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la mise à jour du user dans la BDD"});
			return;
		}
	},

	// Méthode pour supprimer le user
	delete: async(req, res) => {
		// on vérifie dans la requête du front que l'id est bien un nombre
		if (req.params.userId.match(/^\d+$/) == null){
			res.status(400).json({error: `${req.params.userId} n'est pas un nombre`});
			return;
		} 

		// on convertit le userId en INT
		const userId = parseInt(req.params.userId);

		// on vérifie que l'id du user est bien dans la BDD
		let checkUser;
		try {
			checkUser =  await dataMapper.getOneUser(userId);
		} catch(err) {
			res.status(500).json({error:"Problème de requête lors de la vérification du user dans la BDD"});
			return;
		}

		if (!checkUser) {
			res.status(404).json({error: `Pas de user avec l'id ${userId}`});
			return;
		}

		// on supprime de la BDD
		try {
			await dataMapper.deleteUser(userId);
			res.status(200).json({info: "User correctement supprimé"});
			return;
		} catch (err) {
			res.status(500).json({error:"Problème de requête lors de la suppression du user dans la BDD"});
			return;
		}
		
	}


}


module.exports = userController;