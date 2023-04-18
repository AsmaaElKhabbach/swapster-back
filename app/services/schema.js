const Joi = require('joi')

// On crée un schéma pour valider les données de la création de compte
const signup = Joi.object({
	name: Joi.string().alphanum().min(4).required(),
	email: Joi.string().email().required(),
	city: Joi.string().pattern(/^[-a-zA-Z ']{4,50}$/).required(),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"]{4,}$/).required(),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"]{4,}$/).required(),
	passwordConfirm: Joi.ref("password")
});

// On crée un schéma pour valider les données de la connexion
const login = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required()
});

// On crée un schéma pour valider l'id de l'utilisateur
const userId = Joi.number().required();

// On crée un schéma pour valider les données de la maj d'un utilisateur
const updateUser = Joi.object({
	name: Joi.string().alphanum().min(4),
	email: Joi.string().email(),
	city: Joi.string().pattern(/^[-a-zA-Z ']{4,50}$/),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"]{4,}$/),
	city: Joi.string().pattern(/^[-a-zA-Z ]{4,50}$/),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"]{4,}$/),
	passwordConfirm: Joi.ref("password")
});

const searchBook = Joi.object({
	query: Joi.string().min(1).required()
});

// On crée un schéma pour valider l'id du livre
const bookId = Joi.number().required();

// On crée un schéma pour valider les données concernant le statut et la disponibilité d'un livre
const updateUserBook = Joi.object({
	availability: Joi.string(),
	status: Joi.string()
});
// On crée un schéma pour valider le statut d'un livre
const addUserBook = Joi.object({
	status: Joi.string().required()
});


module.exports = { signup, login, userId, updateUser, searchBook, bookId, updateUserBook, addUserBook };