const OrdersModel = require("../models/ordersModel");
const ApiFactory = require("../utils/ApiFactory");

exports.getAll = ApiFactory.getAll(OrdersModel);

exports.getOne = ApiFactory.getOne(OrdersModel);

exports.create = ApiFactory.createOne(OrdersModel);

exports.update = ApiFactory.updateOne(OrdersModel);

exports.delete = ApiFactory.deleteOne(OrdersModel);
