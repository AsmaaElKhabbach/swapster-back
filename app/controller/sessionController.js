const client = require('../database')

const sessionController = {
  // Methode pour se logger

  login: async (req, res) => {
    const { email, password } = req.body;


    try {
      const result = await client.query('SELECT * FROM "user" WHERE email=$1 AND password=$2');

    } catch (error) {

    }
  }

};

module.exports = sessionController