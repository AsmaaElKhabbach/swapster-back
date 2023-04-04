// const { Router } = require('express')
const express = require('express');
const router = express.Router();

const sessionController = require('../controller/sessionController')

router.get('/', (req, res) => {
    res.send('Youpi');
});

router.post('/login', sessionController.login)

module.exports = router;