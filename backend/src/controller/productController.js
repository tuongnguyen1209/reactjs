const ProductModle = require('../models/productModel')
const ApiFactory = require('../utils/ApiFactory')

exports.getAll = ApiFactory.getAll(ProductModle, true)

exports.getOne = ApiFactory.getOne(ProductModle)

exports.create = ApiFactory.createOne(ProductModle)

exports.update = ApiFactory.updateOne(ProductModle)

exports.delete = ApiFactory.deleteOne(ProductModle)
