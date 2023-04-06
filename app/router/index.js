// const { Router } = require('express')
const express = require('express');
const userController = require('../controller/userController');
const sessionController = require('../controller/sessionController');
const {validateToken} = require('../middelware/authentication');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Youpi');
});



router.post('/signup', userController.signup);
router.get('/user/:userId', validateToken, userController.userDetails);
router.patch('/user/:userId', userController.update);
router.delete('/user/:userId', userController.delete);

router.post('/login', sessionController.login);
// router.post('/logout', sessionController.logout)

module.exports = router;