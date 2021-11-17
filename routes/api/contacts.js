const express = require('express')
const { NotFound } = require('http-errors')
const contactsOperations = require('../../model/controllers')
const { validation } = require('../../middlewares')
const { joiContactsSchema } = require('../../validations')

const router = express.Router()

router.get('/', async (_, res, next) => {
  try {
    const result = await contactsOperations.listContacts()
    res.json({
      status: 'succes',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOperations.getById(contactId)
    if (!result) {
      throw new NotFound('Not found')
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', validation(joiContactsSchema), async (req, res, next) => {
  try {
    const { name, email, phone } = req.body
    const result = await contactsOperations.addContact(name, email, phone)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOperations.removeContact(contactId)
    if (!result) {
      throw new NotFound('Not found')
    }
    res.json({
      status: 'success',
      code: 200,
      message: 'Contact deleted'
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:contactId', validation(joiContactsSchema), async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOperations.updateContactById(contactId, req.body)
    if (!result) {
      throw new NotFound('Not found')
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
