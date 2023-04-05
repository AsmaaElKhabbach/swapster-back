// const { Router } = require('express')
const express = require('express');
const userController = require('../controller/userController');
const sessionController = require('../controller/sessionController');
const authenticateToken = require('../middelware/jwt')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Youpi');
});
router.post('/signup', userController.signup)

router.post('/login', sessionController.login)

router.post('/logout', sessionController.logout)

router.delete('/user/:userId', userController.deleteUser)

module.exports = router;