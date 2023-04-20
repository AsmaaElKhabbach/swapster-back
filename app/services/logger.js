const bunyan = require('bunyan');
const path = require('path')

// On crée un logger avec Bunyan ou on stockera les infos
const logger = bunyan.createLogger({
  name: 'swapster',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    }, {
      path: path.join(__dirname, '../logs/swapster.log'),
      level: 'info',
      period: 'id',

    }]
});

module.exports = logger;