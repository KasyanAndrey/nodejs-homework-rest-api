const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const { validation, authenticate, controllerWrapper } = require('../../middlewares')
const { joiContactsSchema } = require('../../validations')

const router = express.Router()

router.get('/', authenticate, controllerWrapper(ctrl.getContactsAll))

router.get('/:contactId', authenticate, controllerWrapper(ctrl.getContactById))

router.post('/', authenticate, validation(joiContactsSchema), controllerWrapper(ctrl.addContact))

router.put('/:contactId', authenticate, validation(joiContactsSchema), controllerWrapper(ctrl.updateContactById))

router.patch('/:contactId/favorite', authenticate, validation(joiContactsSchema), controllerWrapper(ctrl.updateStatusContact))

router.delete('/:contactId', authenticate, controllerWrapper(ctrl.remmoveContactById))

module.exports = router
