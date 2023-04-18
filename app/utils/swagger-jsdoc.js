const swaggerJsdoc = require('swagger-jsdoc');

const options = {
	definition: {
	  openapi: '3.0.0',
	  info: {
		title: 'Swapster',
		version: '1.0.0',
		description: 'API Back Swapster'
	  }
	},
	apis: ['./app/router/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;