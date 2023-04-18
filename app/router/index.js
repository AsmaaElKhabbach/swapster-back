const express = require('express');
const userRouter = require('./userRouter');
const bookRouter = require('./bookRouter');
const router = express.Router();



router.get('/', (req, res) => {
	res.send('Youpi');
});



// route inscription, login, logout, modification et suppression de l'utilisateur
router.use('/user', userRouter);

// route livre(s) et des livres de l'utilisateur
router.use('/book', bookRouter);



module.exports = router;