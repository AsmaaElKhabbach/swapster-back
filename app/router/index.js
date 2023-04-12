const express = require('express');
const userController = require('../controller/userController');
const sessionController = require('../controller/sessionController');
const bookController = require('../controller/bookController');
const validation = require('../services/validation');
const {validateToken} = require('../middelware/authentication');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Youpi');
});

// route inscription du user, modification et suppression
router.post('/signup', validation.signup, userController.signup);
router.get('/user/me', validateToken, validation.userId, userController.userDetails);
router.patch('/user/me', validateToken, validation.userId, validation.updateUser, userController.update);
router.delete('/user/me', validateToken, validation.userId, userController.delete);

// route login et logout
router.post('/login', validation.login, sessionController.login);
router.post('/logout', validateToken, sessionController.logout);


// route des livres du user
router.get('/book/my', validateToken, validation.userId, bookController.userBooks);
router.patch('/book/:bookId/my', validateToken, validation.bookId, bookController.updatedUserBook)

// route livre(s)
router.get('/book/latestadded', bookController.latestbooks);
router.get('/book/:bookId/allusers', validation.bookId, bookController.allUsersByBookId);
router.get('/book/:bookId', validation.bookId, bookController.bookDetails);
router.post('/book/search', validation.searchBook, bookController.searchBook);

module.exports = router;