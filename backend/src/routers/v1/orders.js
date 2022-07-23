const express = require("express");
const ordersController = require("../../controller/ordersController");

const ordersRouter = express.Router();

ordersRouter
  .route("/")
  .get(ordersController.getAll)
  .post(ordersController.create);

ordersRouter.route("/:id").get(ordersController.getOne);

module.exports = ordersRouter;
