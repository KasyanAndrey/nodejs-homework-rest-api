const { NotFound } = require('http-errors')
const { contactsOperations } = require('../../model/contacts')

const getContactById = async (req, res) => {
  const { contactId } = req.params
  const result = await contactsOperations.getById(contactId)
  if (!result) {
    throw new NotFound('Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getContactById
