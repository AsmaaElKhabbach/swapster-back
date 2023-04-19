const express = require('express');
const userRouter = require('./userRouter');
const bookRouter = require('./bookRouter');
const APIError = require('../utils/APIError');
const router = express.Router();

const debug = require('debug')('router')

router.get('/', (req, res) => {
	res.send('Youpi');
});

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

// route inscription, login, logout, modification et suppression de l'utilisateur
router.use('/user', userRouter);

// route livre(s) et des livres de l'utilisateur
router.use('/book', bookRouter);

router.use((error, req, res, next) => {
	if (error instanceof APIError) {
		return res.status(error.status).json({ error: error.message });
	}
	return res.status(500).json({ error: `erreur inattendue : ${ error.message }` });
});

module.exports = router;