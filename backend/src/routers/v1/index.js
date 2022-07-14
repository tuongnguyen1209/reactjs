const express = require("express");
const { RouterPath } = require("../../constant/common");
const authRouter = require("./auth");
const userRouter = require("./userRouter.");

const routerV1 = express.Router();

routerV1.get("/", (req, res) => {
  res.json({ message: "app run in version 1.0.0" });
});

routerV1.use(RouterPath.auth, authRouter);

routerV1.use(RouterPath.user, userRouter);

module.exports = routerV1;
