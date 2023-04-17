const express = require('express');
const bookController = require('../controller/bookController');
const userHasBookController = require('../controller/userHasBookController');
const validation = require('../services/validation');
const { validateToken } = require('../middelware/authentication');
const bookRouter = express.Router();


// route des livres de l'utilisateur
bookRouter.get('/book/my', validateToken, validation.userId, userHasBookController.userBooks);
bookRouter.post('/book/:bookId/my', validateToken, validation.bookId, validation.userId, validation.addUserBook, userHasBookController.addUserBook);
bookRouter.patch('/book/:bookId/my', validateToken, validation.updateUserBook, validation.bookId, validation.userId, userHasBookController.updatedUserBook);
bookRouter.delete('/book/:bookId/my', validateToken, validation.userId, validation.bookId, userHasBookController.deleteUserBook);
bookRouter.get('/book/givenbook/my', validateToken, validation.userId, userHasBookController.givenUserBook);

// route livre(s)
bookRouter.get('/book/latestadded', bookController.latestbooks);
bookRouter.get('/book/search', validation.searchBook, bookController.searchBook)
bookRouter.get('/book/:bookId/allusers', validation.bookId, bookController.allUsersByBookId);
bookRouter.get('/book/:bookId', validation.bookId, bookController.bookDetails);



module.exports = bookRouter;