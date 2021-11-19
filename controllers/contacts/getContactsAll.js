const { Contact } = require('../../model')

const getContactsAll = async (_, res) => {
  const result = await Contact.find({})
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getContactsAll
