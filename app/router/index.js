const express = require('express');
const userRouter = require('./userRouter');
const bookRouter = require('./bookRouter');
const errorHandler = require('../utils/error/errorHandler');
const router = express.Router();





router.get('/', (req, res) => {
	res.send('Youpi');
});

// route inscription, login, logout, modification et suppression de l'utilisateur
router.use('/user', userRouter);

// route livre(s) et des livres de l'utilisateur
router.use('/book', bookRouter);

// gestion d'erreur
router.use(errorHandler.manage);

module.exports = router;