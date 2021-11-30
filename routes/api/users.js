const express = require('express')

const { validation, authenticate, controllerWrapper, upload } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')
const { joiUsersSchema } = require('../../validations')

const router = express.Router()

router.post('/signup', validation(joiUsersSchema), controllerWrapper(ctrl.signup))

router.post('/login', validation(joiUsersSchema), controllerWrapper(ctrl.login))

router.get('/logout', authenticate, controllerWrapper(ctrl.logout))

router.get('/current', authenticate, controllerWrapper(ctrl.currentUserByToken))

router.patch('/avatars', authenticate, upload.single('avatar'), controllerWrapper(ctrl.updateAvatar))

module.exports = router
