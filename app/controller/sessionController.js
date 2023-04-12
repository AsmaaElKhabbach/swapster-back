const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sessionController = {

<<<<<<< HEAD
<<<<<<< HEAD
	// Methode pour se logger
	login: async (req, res) => {

		try {
			// On récupère l'email et le password dans le body
			const { email, password } = req.body;

			// On stock le resultat de la requête
			const user = await dataMapper.getOneUserByEmail(email);
			console.log(user);
			// On vérifie que l'email correspond 

			if (!user) {
				console.log("email incorrect");
				return res.status(401).json({ error: "Email ou mot de passe incorrect" });
			}

			// On vérifie que le password correspond avec bcrypt
			const passwordIsGood = await bcrypt.compare(password, user.password);
			if (!passwordIsGood) {
				console.log("mdp incorrect");
				return res.status(500).json({error:"Email ou mot de passe incorrect"});
			}

			// On crée un token qui va créer une propriété dans user et on le renvoie au client 
			user.token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, {expiresIn : "1h"});
			res.status(201).json(user);

		} catch (error) {
			console.error(error)
			res.status(500).json({error: ""});
		}
	},
	
	// Logout Method
	logout: async (req, res) => {
		try {
			// Retirer le token de Authorization header
			req.headers.authorization = null;

			res.status(200).json({ message: "Vous êtes bien déconnecté" });
		} catch (error) {
			res.status(500).json({ error: "Erreur serveur" });
		}
	}
=======
  // Methode pour se logger
=======
	// Methode pour se logger
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3

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
			// On vérifie que le password correspond avec bcrypt
			const passwordIsGood = await bcrypt.compare(password, user.password);

			if (!passwordIsGood) {
				return res.status(500).json({ error: "Email ou mot de passe incorrect" });
			}
			// On crée un token qui va créer une propriété dans user et on le renvoie au client 
			user.token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });

			res.status(201).json(user)

		} catch (error) {
			res.status(500).json({ error: "Erreur serveur" });

		}
	},
	// Logout Method

	logout: async (req, res) => {
		try {
			// Retirer le token de Authorization header
			req.headers.authorization = null;

<<<<<<< HEAD
      res.status(200).json({ message: "Vous êtes bien déconnecté" });
    } catch (error) {
      res.status(500).json({ error: "Erreur serveur" });
    }
  }
>>>>>>> origin/main
=======
			res.status(200).json({ message: "Vous êtes bien déconnecté" });
		} catch (error) {
			res.status(500).json({ error: "Erreur serveur" });
		}
	}
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3

}

module.exports = sessionController;