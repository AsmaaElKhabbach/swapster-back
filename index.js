require('dotenv').config();

const express = require('express');
//const session = require('express-session');
const app = express();
const router = require('./app/router');



app.use(express.urlencoded({ extended: true }));

app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
});

