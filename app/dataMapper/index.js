const client = require("../utils/dbClient");

const dataMapper = {

    // Methode pour insérer le user dans la bdd
    async insertUser(user) {
        const query = 'INSERT INTO "user" (name, email, city, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await client.query(query, [user.name, user.email, user.city, user.password]);
        return result.rows[0];
    },

    // Methode pour récupérer le user via l'id
    async getOneUser(userId) {
        const query = 'SELECT * FROM "user" WHERE "id"=$1';
        const result = await client.query(query, [userId]);
        return result.rows[0];
    },

    // Methode pour récupérer le user via le name
    async getOneUserByName(name) {
        // La requête : on interroge la bdd
        const query = 'SELECT * FROM "user" WHERE "name"=$1';
        // On retourne le résultat
        const result = await client.query(query, [name]);
        return result.rows[0];
    },

    // Methode pour récupérer le user via l'email
    async getOneUserByEmail(email) {
        // La requête : on interroge la bdd
        const query = 'SELECT * FROM "user" WHERE "email"=$1';
        // On retourne le résultat
        const result = await client.query(query, [email]);
        return result.rows[0];
    },

    // Méthode pour mettre à jour le user 
    async updateUser(user) {
        const query = 'UPDATE "user" SET "name" = $1, "email" = $2, "city" = $3, "password" = $4 WHERE "id" = $5';
        await client.query(query, [user.name, user.email, user.city, user.password, user.id]);
    },

    // Méthode pour supprimer un user via l'id
    async deleteUser(userId) {
        const query = 'DELETE FROM "user" WHERE "id" = $1';
        await client.query(query, [userId]);
    }

};

module.exports = dataMapper;