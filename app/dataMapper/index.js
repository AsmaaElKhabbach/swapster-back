const client = require("../utils/dbClient");

const dataMapper = {
    async insertUser(user) {
        console.log(user);
        const query = 'INSERT INTO "user" (name, email, city, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await client.query(query, [user.name, user.email, user.city, user.password]);
        return result.rows[0];
    },

    async getOneUser(userId) {
        const query = 'SELECT * FROM "user" WHERE "id"=$1';
        const result = await client.query(query, [userId])
        return result.rows[0];
    },

    // Methode pour récupérer le user via l'email
    async getOneUserByEmail(email){
        // La requête : on interroge la bdd
        const query = 'SELECT * FROM "user" WHERE "email"=$1';
        // On retourne le résultat
        const result = await client.query(query, [email])
        return result.rows[0];
    }


};

module.exports = dataMapper;