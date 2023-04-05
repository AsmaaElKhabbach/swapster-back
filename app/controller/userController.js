const dataMapper = require('../dataMapper');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


function generateAccessToken(email) {
  return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

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

      const token = generateAccessToken({ email: req.body.email });

      const userData = await dataMapper.insertUser(user);
      res.status(201).json(userData, token);

    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Erreur lors de l'insertion de l'utilisateur dans la base de données" });
    }
  }



}


module.exports = userController;