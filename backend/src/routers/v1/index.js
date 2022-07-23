const express = require("express");
const { RouterPath } = require("../../constant/common");
const { authChecking } = require("../../midderware/authChecking");
const authRouter = require("./auth");
const categoryRouter = require("./categories");
const ordersRouter = require("./orders");
const productRouter = require("./product");
const userRouter = require("./userRouter");

const routerV1 = express.Router();

routerV1.get("/", (req, res) => {
  res.json({ message: "app run in version 1.0.0" });
});

routerV1.use(RouterPath.auth, authRouter);

routerV1.use(RouterPath.user, userRouter);

routerV1.use("/product", productRouter);
routerV1.use("/category", categoryRouter);
routerV1.use("/orders", authChecking, ordersRouter);

module.exports = routerV1;
