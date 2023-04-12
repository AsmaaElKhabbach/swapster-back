const Joi = require('joi')

<<<<<<< HEAD
// on crée un schéma qui va valider le signup
const signup = Joi.object({
	name: Joi.string().alphanum().min(4).required(),
	email: Joi.string().email().required(),
	city: Joi.string().pattern(/^[-a-zA-Z ]{4,50}$/).required(),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"]{4,}$/).required(),
	passwordConfirm: Joi.ref("password")
});

// on crée un schéma qui va valider le login
const login = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required()
});

// on crée un schéma qui va valider l'id du user
const userId = Joi.number().required();

// on crée un schéma qui va valider la MAJ que va faire le user
const updateUser = Joi.object({
	name: Joi.string().alphanum().min(4),
	email: Joi.string().email(),
	city: Joi.string().pattern(/^[-a-zA-Z ]{4,50}$/),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"]{4,}$/),
	passwordConfirm: Joi.ref("password")
});

// on crée un schéma qui va valider les recherches
const searchBook = Joi.object({
	search: Joi.string().min(1).required()
});

// on crée un schéma qui va valider l'id du book
const bookId = Joi.number().required();
=======
// Je crée un schéma qui va valider le signup

const signup = Joi.object({
  name: Joi.string().alphanum().min(4).required(),
  email: Joi.string().email().required(),
  city: Joi.string().pattern(/^[a-zA-Z]{4,50}$/).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{4,}$/).required(),
  passwordConfirm: Joi.ref("password")
})


const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

const userId = Joi.number().required();

const updateUser = Joi.object({
  name: Joi.string().alphanum().min(4),
  email: Joi.string().email(),
  city: Joi.string().pattern(/^[a-zA-Z]{4,50}$/),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{4,}$/),
  passwordConfirm: Joi.ref("password")
})


>>>>>>> origin/main




<<<<<<< HEAD
module.exports = { signup, login, userId, updateUser, searchBook,  bookId };
=======
module.exports = { signup, login, userId, updateUser };
>>>>>>> origin/main
