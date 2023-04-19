const express = require('express');
const userController = require('../controller/userController');
const sessionController = require('../controller/sessionController');
const validation = require('../services/validation');
const { validateToken } = require('../middelware/authentication');
const userRouter = express.Router();


// route inscription, login, logout
userRouter.post('/signup', validation.signup, userController.signup);
userRouter.post('/login', validation.login, sessionController.login);
userRouter.post('/logout', validateToken, sessionController.logout);
userRouter.get('/me', validateToken, validation.userId, userController.userDetails);
userRouter.patch('/me', validateToken, validation.userId, validation.updateUser, userController.update);

// route modification et suppression du user
userRouter.delete('/me', validateToken, validation.userId, userController.delete);

module.exports = userRouter;