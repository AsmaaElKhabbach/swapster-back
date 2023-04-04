const client = require("../utils/dbClient");

const dataMapper = {
    async insertUser(user) {
        const query = 'INSERT INTO "user" (name, email, city, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await client.query(query, [user.name, user.email, user.city, user.password]);
        return result.rows[0];
    },

    async getUserByEmail(email){



    }

    
};

module.exports = dataMapper;