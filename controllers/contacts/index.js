const getContactsAll = require('./getContactsAll')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const updateContactById = require('./updateContactById')
const updateStatusContact = require('./updateStatusContact')
const remmoveContactById = require('./remmoveContactById')

module.exports = {
  getContactsAll,
  getContactById,
  addContact,
  updateContactById,
  updateStatusContact,
  remmoveContactById,
}
