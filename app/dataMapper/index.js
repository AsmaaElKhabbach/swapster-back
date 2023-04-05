const client = require("../utils/dbClient");

const dataMapper = {
    async insertUser(user) {
        const query = 'INSERT INTO "user" (name, email, city, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await client.query(query, [user.name, user.email, user.city, user.password]);
        return result.rows[0];
    },

    // Methode pour récupérer le user via l'email

    async getUserByEmail(email) {
        // La requête : on interroge la bdd
        const query = 'SELECT * from "user" WHERE email=$1'
        // On stocke le résultat
        const result = await client.query(query, [email])
        // On retourne le résultat
        return result.rows[0]
    }


};

module.exports = dataMapper;