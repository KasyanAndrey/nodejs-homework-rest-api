const listContacts = require('./listContacts')

const getById = async (id) => {
  const contacts = await listContacts()
  const result = contacts.find((item) => String(item.id) === String(id))
  if (!result) {
    return null
  }

  return result
}

module.exports = getById
