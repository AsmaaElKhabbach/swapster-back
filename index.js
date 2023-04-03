require('dotenv').config();
const express = require('express');
//const session = require('express-session');
const app = express();
const router = require('./app/router');



// app.use(express.urlencoded({ extended: true }));

// app.use(session({
//     saveUninitialized: true,
//     resave: true,
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//         secure: false, // ON EST PAS EN HTTPS
//         maxAge: 1000 * 60 * 60 * 24 // session d'une durée max de 24H
//     }
// }));

// app.use((request, response, next) => {
//     // transmet les infos de session aux vues
//   app.locals.session = request.session;

//   next();
// });

app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
});

