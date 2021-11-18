const listContacts = require('./listContacts')
const updataContacts = require('./updateContacts')

const removeContact = async (id) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex((item) => String(item.id) === String(id))
  if (idx === -1) {
    return null
  }
  const removeContact = contacts.splice(idx, 1)

  await updataContacts(contacts)

  return removeContact
}

module.exports = removeContact
