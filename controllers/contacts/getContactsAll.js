const { contactsOperations } = require('../../model/contacts')

const getContactsAll = async (_, res) => {
  const result = await contactsOperations.listContacts()
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getContactsAll
