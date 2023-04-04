const dataMapper = require('../dataMapper');

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
          } catch(err) {
            res.status(500).send("Erreur lors de l'insertion de l'utilisateur dans la base de données");
          }
    }
}


module.exports = userController;