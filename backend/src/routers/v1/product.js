const express = require("express");
const productController = require("../../controller/productController");

const productRouter = express.Router();

productRouter
  .route("/")
  .get(productController.getAll)
  .post(productController.create);

productRouter.route("/:id").get(productController.getOne);

module.exports = productRouter;
