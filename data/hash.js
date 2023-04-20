// Générer les hash de password

const bcrypt = require('bcrypt');

// Attention, hash change tout le temps
[ "john", "Donneur" ].forEach(p => {
	bcrypt.hash(p, 10, (err, hash) => { console.log(`password = ${p}, hash = ${hash}`); });
});

// Test pour comparer les hashs (c'est comme ça qu'on a vu que les hashs changeaient tout le temps)
bcrypt.compare('john', '$2b$10$yZznjHJCENsDpS4SFDcLQuOiaNKHLPsJ9qURrKTFyWOqMdVVR46/.', (err, result) => {
	console.log('1 : ', result);
});

bcrypt.compare('Donneur', '$2b$10$nol..oNKvA4TsQICrBrAte/XAhbceVBadwuREuGqu7mEqj62ci//G', (err, result) => {
	console.log('2 : ', result);
});

