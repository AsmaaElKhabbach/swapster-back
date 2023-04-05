const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function generateAccessToken(email) {
  return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

// Methode pour se logger

const sessionController = {
  login: async (req, res) => {
    // On récupère l'email et le password dans le body
    const { email, password } = req.body;

    try {
      // On stock le resultat de la requête
      const user = await dataMapper.getOneUserByEmail(email);

      // On vérifie que l'email correspond 

      if (!user) {
        return res.status(401).json({ error: "Email ou mot de passe incorrect" });
      }
      // On vérifie que le password correspond avec bcrypt
      const passwordIsGood = await bcrypt.compare(password, user.password);

      if (!passwordIsGood) {
        return res.status(500).json({ error: "Email ou mot de passe incorrect" })

      }

      // On crée un token et on le renvoie au client 

      const token = generateAccessToken({ email: req.body.email });


      res.status(201).json(user, token)

    } catch (error) {
      console.error(error)
      res.status(500).send("Erreur serveur")

    }
  },
  // Logout Method

  // logout: async (req, res) => {
  //   // On supprime le token du local storage
  //   localStorage.removeItem('token');
  //   res.status(200).json({ message: "Vous êtes bien déconnecté" })

  // }
};

module.exports = sessionController;