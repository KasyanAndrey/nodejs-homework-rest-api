const { Schema, model } = require('mongoose')

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
    minlengh: 2,
    maxlengh: 50,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,

  },
  favorite: {
    type: Boolean,
    default: false,
    required: true,
  },
}, { versionKey: false, timestamps: true })

const Contact = model('contact', contactSchema)

module.exports = Contact
