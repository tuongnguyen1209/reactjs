const express = require("express");

const routerV1 = express.Router();

routerV1.get("/", (req, res) => {
  res.json({ message: "app run in version 1.0.0" });
});

module.exports = routerV1;
