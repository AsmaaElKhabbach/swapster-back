// On crée une class personalisée APIError pour la gestion d'erreurs
// On spécifie le code et un message d'erreur

class APIError extends Error {
    constructor(code, msg) {
        super(msg);
        this.status = code;
    }
};

module.exports = APIError;