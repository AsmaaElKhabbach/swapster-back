const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET;

const tokenOptions = {
    expiresIn : "1h"
};

const tokenService = {
    createToken(userId) {
        return jwt.sign({ userId: userId }, secret, tokenOptions);
    },

    verifyToken(token) {
        return jwt.verify(token, secret, (err, payload) => {
			return err ? undefined : payload.userId;
		});
    }
};

module.exports = tokenService;