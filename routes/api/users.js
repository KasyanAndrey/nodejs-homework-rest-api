const express = require('express')

const { validation, controllerWrapper } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')
const { joiUsersSchema } = require('../../validations')

const router = express.Router()

router.post('/signup', validation(joiUsersSchema), controllerWrapper(ctrl.signup))

router.post('/login', validation(joiUsersSchema), controllerWrapper(ctrl.login))

module.exports = router
