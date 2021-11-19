const express = require('express')

const { contacts: ctrl } = require('../../controllers')
const { validation, controllerWrapper } = require('../../middlewares')
const { joiContactsSchema } = require('../../validations')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.getContactsAll))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post('/', validation(joiContactsSchema), controllerWrapper(ctrl.addContact))

router.put('/:contactId', validation(joiContactsSchema), controllerWrapper(ctrl.updateContactById))

router.patch('/:contactId/favorite', validation(joiContactsSchema), controllerWrapper(ctrl.updateStatusContact))

router.delete('/:contactId', controllerWrapper(ctrl.remmoveContactById))

module.exports = router
