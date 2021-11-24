const { Conflict } = require('http-errors')

const { User } = require('../../model')

const signup = async (req, res) => {
  const { email, password, subscription, token } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }

  const newUser = new User({ email, subscription, token })
  newUser.setPassword(password)
  await newUser.save()

  res.status(201).json({
    Status: '201 Created',
    ContentType: 'application/json',
    ResponseBody: {
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
      },
    },
  })
}

module.exports = signup
