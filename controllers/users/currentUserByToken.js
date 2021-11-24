const { Unauthorized } = require('http-errors')

const currentUserByToken = async (req, res) => {
  if (!req.user) {
    throw new Unauthorized('Not authorized')
  }
  const { email, subscription } = req.user
  res.json({
    Status: '200 OK',
    ContentType: 'application/json',
    ResponseBody: {
      email: email,
      subscription: subscription,
    },
  })
}

module.exports = currentUserByToken
