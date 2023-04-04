// const { Router } = require('express')
const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Youpi');
});


// router.get('/book/:bookId', )


// router.post('/login', );

// router.get('/logout', );

router.post('/signup', userController.register);



module.exports = router;