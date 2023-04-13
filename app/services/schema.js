const Joi = require('joi')

// Je crée un schéma qui va valider le signup

const signup = Joi.object({
	name: Joi.string().alphanum().min(4).required(),
	email: Joi.string().email().required(),
	city: Joi.string().pattern(/^[-a-zA-Z ]{4,50}$/).required(),
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"]{4,}$/).required(),
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
	password: Joi.string().pattern(/^[-a-zA-Z0-9 #!*%?;:,.=+'"]{4,}$/),
	passwordConfirm: Joi.ref("password")
})

const searchBook = Joi.object({
	search: Joi.string().min(1).required()
})


const bookId = Joi.number().required();

const updateUserBook = Joi.object({
	availability: Joi.string(),
	status: Joi.string()
})

const addUserBook = Joi.object({
	status: Joi.string().required()
})






module.exports = { signup, login, userId, updateUser, searchBook, bookId, updateUserBook, addUserBook };