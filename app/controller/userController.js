const dataMapper = require('../dataMapper');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
// const jwt = require


const userController = {

    //signup

    register: async (req, res) => {
        try {
            const { name, email, password, passwordConfirm } = req.body;

            if (!name) {
                res.status(500).json({error:"manque name"});
                console.log(user.name);
                return;
            };

            if (!emailValidator.validate(email)) {
                res.status(500).json({error:"email invalide"});
                console.log(email);
                return;
            };

            const checkUser = await dataMapper.getOneUserByEmail(email);

            if (checkUser) {
                res.status(500).json({error:"email déjà utilisé"});
                return;
            };

            if (password !== passwordConfirm) {
                res.status(500).json({error:"Le mot de passe ne correspond pas."});
                return;
            };

            password = await bcrypt.hash(password, 10);

            const userData = await dataMapper.insertUser(user);
            console.log(userData);
            res.status(201).json(userData);

          } catch(err) {
            res.status(500).json({error:"Erreur lors de l'insertion de l'utilisateur dans la base de données"});
          }
        },
    
    // Methode pour se logger

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
            //  const passwordIsGood = await bcrypt.compare(password, user.password);

            //  if (!passwordIsGood) {
            //    res.status(500).send("Email ou mot de passe incorrect")

            //  }

            if (user.password !== password) {
              return res.status(401).json({ error: "Email ou mot de passe incorrect" })

            }
            // On crée un token et on le renvoie au client 
            // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
            // res.json({ token });


            res.status(201).json(user)

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

}


module.exports = userController;