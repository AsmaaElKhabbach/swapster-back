// générer les hash de password

const bcrypt = require('bcrypt');

// attention, hash change tout le temps
bcrypt.hash("john", 10, (err, hash) => { console.log('hash = ', hash); });

bcrypt.hash("Donneur", 10, (err, hash) => { console.log('hash = ', hash); });



bcrypt.compare('john', '$2b$10$yZznjHJCENsDpS4SFDcLQuOiaNKHLPsJ9qURrKTFyWOqMdVVR46/.', (err, result) => {
	console.log('1 : ', result);
});

bcrypt.compare('john', '$2b$10$ESX1yElqpccjlrTyXZ0sqe3wvzpXEA1qEz1qGuPuSXG115ZwJ5Xje', (err, result) => {
	console.log('2 : ', result);
});

bcrypt.compare('Donneur', '$2b$10$nol..oNKvA4TsQICrBrAte/XAhbceVBadwuREuGqu7mEqj62ci//G', (err, result) => {
	onsole.log('3 : ', result);
});

bcrypt.compare('Donneur', '$2b$10$avK9EKJYpOFR1Ajaq20x2Orp4YG2GBwnGAHM1OmMismTbw2iR6.ai', (err, result) => {
	console.log('4 : ', result);
});