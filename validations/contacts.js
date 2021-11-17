const Joi = require('joi')

const joiContactsSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
})

module.exports = joiContactsSchema
