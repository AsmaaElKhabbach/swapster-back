const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');

const sessionController = {

  // Methode pour se logger

  login: async (req, res) => {

    try {
      // On récupère l'email et le password dans le body
      const { email, password } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email manquant" });
      }

      if (!password) {
        return res.status(400).json({ error: "Password manquant" });
      }

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
        return res.status(500).json({ error: "Email ou mot de passe incorrect" });
      }

      // On crée un token et on le renvoie au client 
      // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      // res.json({ token });


      res.status(201).json(user)

    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Erreur serveur" });

    }
  },
  // Logout Method

  // logout: async (req, res) => {
  //   // On supprime le token du local storage
  //   localStorage.removeItem('token');
  //   res.status(200).json({ message: "Vous êtes bien déconnecté" })

  // }

}

module.exports = sessionController;