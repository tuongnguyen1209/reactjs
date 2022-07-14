const express = require("express");
const { RouterPath } = require("../../constant/common");
const authController = require("../../controller/authController");

const authRouter = express.Router();

authRouter.route(RouterPath.login).post(authController.login);

authRouter.route(RouterPath.signup).post(authController.signup);

module.exports = authRouter;
