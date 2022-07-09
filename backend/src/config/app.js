// import
const express = require("express");

// configuration
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "app is running",
  });
});

module.exports = app;
