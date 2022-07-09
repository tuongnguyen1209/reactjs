const mongoose = require("mongoose");
const Log = require("../utils/Log");

exports.connect = (uri) => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then(() => {
      Log.success("Connect database sucessfully");
    })
    .catch((err) => {
      Log.error("Connect database error:", err.message);
    });
};
