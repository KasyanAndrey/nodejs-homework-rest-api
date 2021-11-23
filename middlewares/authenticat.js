const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')

const { User } = require('../model')

const { SECRET_KEY } = process.env

const authenticat = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ')
    if (bearer !== 'Bearer') {
      throw new Unauthorized()
    }
    try {
      const { id } = jwt.verify(token, SECRET_KEY)
      const user = await User.findById(id)
      if (!user) {
        throw new Unauthorized('Not authorized')
      }
      req.user = user
      console.log(user)
      next()
    } catch (error) {
      throw new Unauthorized(error.message)
    }
  } catch (error) {
    next(error)
  }
}

module.exports = authenticat
