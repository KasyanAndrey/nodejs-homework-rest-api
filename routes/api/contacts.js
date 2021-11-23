const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const { validation, authenticat, controllerWrapper } = require('../../middlewares')
const { joiContactsSchema } = require('../../validations')

const router = express.Router()

router.get('/', authenticat, controllerWrapper(ctrl.getContactsAll))

router.get('/:contactId', authenticat, controllerWrapper(ctrl.getContactById))

router.post('/', authenticat, validation(joiContactsSchema), controllerWrapper(ctrl.addContact))

router.put('/:contactId', authenticat, validation(joiContactsSchema), controllerWrapper(ctrl.updateContactById))

router.patch('/:contactId/favorite', authenticat, validation(joiContactsSchema), controllerWrapper(ctrl.updateStatusContact))

router.delete('/:contactId', controllerWrapper(ctrl.remmoveContactById))

module.exports = router
