// const { Router } = require('express')
const express = require('express');
const userController = require('../controller/userController');
const sessionController = require('../controller/sessionController');
const validation = require('../services/validation');
const {validateToken} = require('../middelware/authentication');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Youpi');
});

router.post('/signup', validation.signup, userController.signup);
router.get('/user/me', validateToken, validation.userId, userController.userDetails);
router.patch('/user/me', validateToken, validation.userId, validation.updateUser, userController.update);
router.delete('/user/me', validateToken, validation.userId, userController.delete);

router.post('/login', validation.login, sessionController.login);
router.post('/logout', sessionController.logout);

module.exports = router;