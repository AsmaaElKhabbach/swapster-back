// const { Router } = require('express')
const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Youpi');
});

module.exports = router;