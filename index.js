require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./app/router');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Swapster API",
			version: "1.0.0",
			description: "API Swapster to give books a second life"
		},
		servers: [
			{
				url: "https://swapster-back-production.up.railway.app"
			}
		],
	},
	apis: ["./app/utils/swagger.js"]
}

const specs = swaggerJsDoc(options);


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(router);


app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`);
});