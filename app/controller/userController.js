const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt')

const userController = {

  //signup

  register: async (req, res) => {
    const user = {
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      password: req.body.password
    };

    try {
      const userData = await dataMapper.insertUser(user);
      res.status(201).json(userData);
    } catch (err) {
      res.status(500).send("Erreur lors de l'insertion de l'utilisateur dans la base de données");
    }
  },

  // Methode pour se logger

  login: async (req, res) => {
    // On récupère l'email et le password dans le body
    const { email, password } = req.body;

    try {
      // On stock le resultat de la requête
      const user = await dataMapper.getUserByEmail(email);

      // On vérifie que l'email correspond 

      if (!user) {
        return res.status(401).json({ error: "Email ou mot de passe incorrect" });
      }
      // On vérifie que le password correspond avec bcrypt
      //  const passwordIsGood = await bcrypt.compare(password, user.password);

      //  if (!passwordIsGood) {
      //    res.status(500).send("Email ou mot de passe incorrect")

      //  }

      if (user.password !== password) {
        return res.status(401).json({ error: "Email ou mot de passe incorrect" })

      }
      res.status(201).json(user)

    } catch (error) {
      console.error(error)
      res.status(500).send("Erreur serveur")

    }
  },

}


module.exports = userController;