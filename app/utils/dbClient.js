const { Client } = require('pg');

const client = new Client({
<<<<<<< HEAD
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	port: process.env.PGPORT
=======
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
>>>>>>> origin/main
});

client.connect();

module.exports = client;
