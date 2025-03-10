const { Contact } = require('../../model')

const getContactsAll = async (req, res) => {
  const { page, limit } = req.query
  const { _id } = req.user
  const skip = (page - 1) * limit
  const result = await Contact.find(
    { owner: _id },
    '_id name email favorite owner',
    { skip, limit: +limit }
  ).populate('owner', '_id email')
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = getContactsAll
