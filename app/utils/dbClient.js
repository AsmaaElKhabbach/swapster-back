const { Client } = require('pg');

const client = new Client({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	port: process.env.PGPORT
<<<<<<< HEAD
=======
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
>>>>>>> origin/main
=======
>>>>>>> 17cb94663d733d4570414deb54c8d49045fe54f3
});

client.connect();

module.exports = client;
