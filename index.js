require('dotenv').config();

const express = require('express');
const cors = require('cors');
//const session = require('express-session');
const app = express();
const router = require('./app/router');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
});

