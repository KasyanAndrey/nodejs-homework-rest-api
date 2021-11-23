const Joi = require('joi')

const joiContactsSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
})

module.exports = joiContactsSchema
