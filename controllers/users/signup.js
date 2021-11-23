const { Conflict } = require('http-errors')
const { User } = require('../../model')

const signup = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }

  const newUser = await User.create({ email, password })
  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Singup success',
  })
}

module.exports = signup
