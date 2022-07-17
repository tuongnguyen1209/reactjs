const CategoryController = require('../models/categoryModel')
const ApiFactory = require('../utils/ApiFactory')

exports.getAll = ApiFactory.getAll(CategoryController)

exports.getOne = ApiFactory.getOne(CategoryController)

exports.create = ApiFactory.createOne(CategoryController)

exports.update = ApiFactory.updateOne(CategoryController)

exports.delete = ApiFactory.deleteOne(CategoryController)
