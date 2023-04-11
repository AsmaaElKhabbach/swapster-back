const Joi = require('joi')

// Je crée un schéma qui va valider le signup

const signup = Joi.object({
	name: Joi.string().alphanum().min(4).required(),
	email: Joi.string().email().required(),
	city: Joi.string().pattern(/^[-a-zA-Z ]{4,50}$/).required(),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"()[]{}]{4,}$/).required(),
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
	city: Joi.string().pattern(/^[-a-zA-Z ]{4,50}$/),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"()[]{}]{4,}$/),
	passwordConfirm: Joi.ref("password")
})



module.exports = { signup, login, userId, updateUser };