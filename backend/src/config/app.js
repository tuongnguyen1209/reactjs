// import
const express = require("express");
const AppError = require("../utils/AppError");
const cors = require("cors");
const handlerError = require("../controller/handleError");
const router = require("../routers");

// configuration app
const app = express();
app.use(cors());

// configuration router
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({
    message: "app is running",
  });
});

app.all("*", (req, res, next) => {
  next(new AppError("Can not find this route on server", 404));
});

app.use(handlerError);

module.exports = app;
