const debug = require('debug')('error');

const errorHandler = {
  manage(err, req, res, next) {
    // j'affiche l'erreur dans le terminal
    debug(err);
    // je log mon erreur grâce à Bunyan
    // err.url = req.url;
    req.log.error(err, req.url);

    // je communique l'erreur à l'utilisateur
    res.status(err.status).json('error', { title: err.message });
  }
};

module.exports = errorHandler;