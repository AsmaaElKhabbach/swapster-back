const express = require('express');
const userRouter = require('./userRouter');
const bookRouter = require('./bookRouter');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../utils/swagger.json');

router.get('/', (req, res) => {
	res.send('Youpi');
});


// route inscription, login, logout, modification et suppression de l'utilisateur
router.use('/user', userRouter);

// route livre(s) et des livres de l'utilisateur
router.use('/book', bookRouter);


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;