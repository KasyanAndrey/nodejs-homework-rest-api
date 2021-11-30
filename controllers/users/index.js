const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const currentUserByToken = require('./currentUserByToken')
const updateAvatar = require('./updateAvatar')

module.exports = { signup, login, logout, currentUserByToken, updateAvatar }
