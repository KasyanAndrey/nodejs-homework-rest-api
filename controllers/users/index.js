const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const currentUserByToken = require('./currentUserByToken')

module.exports = { signup, login, logout, currentUserByToken }
