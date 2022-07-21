const UserModel = require('../models/userModel')
const AppResponse = require('../utils/AppResponse')
const catchAsync = require('../utils/catchAsync')
const JWTFeature = require('../utils/JWTFeatures')
const bcrypt = require('bcryptjs')
const AppError = require('../utils/AppError')

exports.login = catchAsync(async (req, res) => {
	const { username, password } = req.body
	const user = await UserModel.findOne({ username })
	const checking = await bcrypt.compare(password, user.password)
	if (checking) {
		const token = new JWTFeature().build({ id: user._id })
		AppResponse(res, {
			token,
		})
	} else {
		throw new AppError('Username or password is wrong!')
	}
})

exports.signup = catchAsync(async (req, res) => {
	const data = req.body
	await UserModel.create(data)
	AppResponse(res)
})
