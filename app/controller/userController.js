const dataMapper = require('../dataMapper');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// function generateAccessToken(email) {
//   return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
// }

const userController = {

  //signup

  signup: async (req, res) => {
    try {
      const { name, email, city, password, passwordConfirm } = req.body;

      if (!name) {
        res.status(500).json({ error: "manque name" });
        return;
      };

      if (!city) {
        res.status(500).json({ error: "manque city" });
        return;
      };

      if (!emailValidator.validate(email)) {
        res.status(500).json({ error: "email invalide" });
        return;
      };

      const checkUser = await dataMapper.getOneUserByEmail(email);

      if (checkUser) {
        res.status(500).json({ error: "email déjà utilisé" });
        return;
      };

      if (password !== passwordConfirm) {
        res.status(500).json({ error: "Le mot de passe ne correspond pas." });
        return;
      };

      const user = {
        name: name,
        email: email,
        city: city,
        password: await bcrypt.hash(password, 10)
      };

      // const token = generateAccessToken({ email: req.body.email });

      const userData = await dataMapper.insertUser(user);
      res.status(201).json(userData);

    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Erreur lors de l'insertion de l'utilisateur dans la base de données" });
    }
  },

  deleteUser: async (req, res) => {

    try {
      // On récupère l'id de l'utilisteur à supprimer
      const userId = parseInt(req.params.id, 10)

      // On verifie si l'id est bien un Number
      if (!userId || isNaN) {
        return res.status(400).json({ message: "L'identifiant de l'utilisateur est invalide" })
      }

      // On vérifie que l'id existe en bdd

      const user = await dataMapper.getOneUser(id);

      if (!user) {
        return res.status(404).json({ message: "L'utilisateur n'existe pas" })
      }

      // On supprime l'utilisateur
      await dataMapper.deleteUser(userId);

      return res.status(201).json({ message: `L'utilisateur avec l'identifiant ${userId} est supprimé ` })


    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Une erreur est survenue lors de la suppression de l'utilisateur." });

    }

  }



}


module.exports = userController;