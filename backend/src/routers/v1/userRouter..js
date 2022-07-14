const express = require("express");
const { RouterPath } = require("../../constant/common");
const { authChecking } = require("../../midderware/authChecking");

const userController = require("../../controller/userController");

const userRouter = express.Router();

userRouter.route("/").get();

userRouter.route(RouterPath.me).get(authChecking, userController.getMyProfile);

module.exports = userRouter;
