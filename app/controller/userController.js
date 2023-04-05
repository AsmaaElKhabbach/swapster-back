const dataMapper = require('../dataMapper');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');


const userController = {

    //signup

    register: async (req, res) => {
        try {
            const user = { 
                name: req.body.name,
                email: req.body.email,
                city: req.body.city,
                password: req.body.password,
                passwordConfirm : req.body.passwordConfirm
            };

            if (!user.name) {
                res.status(500).json({error:"manque name"});
                console.log(user.name);
                return;
            }

            if (!emailValidator.validate(user.email)) {
                res.status(500).json({error:"email invalide"});
                console.log(user.email);
                return;
            }

            const checkUser = await dataMapper.getOneUserByEmail(user.email);

            if (checkUser) {
                res.status(500).json({error:"email déjà utilisé"});
                return;
            }

            if (user.password !== user.passwordConfirm) {
                res.status(500).json({error:"Le mot de passe ne correspond pas."});
                return;
            }

            user.password = await bcrypt.hash(user.password, 10);

            const userData = await dataMapper.insertUser(user);
            console.log(userData);
            res.status(201).json(userData);
          } catch(err) {
            res.status(500).json({error:"Erreur lors de l'insertion de l'utilisateur dans la base de données"});
          }
    }
}


module.exports = userController;