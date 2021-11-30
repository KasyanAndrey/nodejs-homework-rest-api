const fs = require('fs/promises')
const path = require('path')
const Jimp = require('jimp')
const { NotFound, BadRequest } = require('http-errors')

const { User } = require('../../model')

const avatarDir = path.join(__dirname, '../../public/avatars')

const updateAvatar = async (req, res) => {
  if (!req.file) {
    throw new BadRequest('Error upload file')
  }
  const { _id } = req.user
  const { path: tmpUpload, originalname } = req.file
  try {
    const filename = `${String(_id)}_${originalname}`
    const resultUpload = path.join(avatarDir, filename)
    await fs.rename(tmpUpload, resultUpload)
    const avatar = path.join('/avatars', filename)
    await Jimp.read(resultUpload)
      .then((image) => image.resize(250, 250).write(resultUpload))
      .catch((error) => console.log(error))
    const result = await User.findByIdAndUpdate(
      _id,
      { avatarURL: avatar },
      { new: true }
    )
    if (!result) {
      throw new NotFound('not found')
    }
    res.json({
      status: 'success',
      code: 200,
      avatarURL: avatar,
    })
  } catch (error) {
    await fs.unlink(tmpUpload)
    throw error
  }
}

module.exports = updateAvatar
