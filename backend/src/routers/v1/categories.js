const express = require("express");
const categoryController = require("../../controller/categoryController");

const categoryRouter = express.Router();

categoryRouter
  .route("/")
  .get(categoryController.getAll)
  .post(categoryController.create);

categoryRouter.route("/:id").get(categoryController.getOne);

module.exports = categoryRouter;
