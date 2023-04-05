// Require le module
const { Client } = require('pg')
// Créer un client
const client = new Client

// Connecter le client
client.connect();


module.exports = client;