const Joi = require('joi')

const joiUsersSchema = Joi.object({
  password: Joi.string().min(8).required(),
  email: Joi.string().required(),
  subscription: Joi.string().default('starter'),
  token: Joi.string().default(null),
})

module.exports = joiUsersSchema
