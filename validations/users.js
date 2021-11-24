const Joi = require('joi')

const joiUsersSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
  subscription: Joi.string().default('starter'),
  token: Joi.string().default(null),
})

module.exports = joiUsersSchema
