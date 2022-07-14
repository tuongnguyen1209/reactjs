const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
  createBy: {
    type: String,
    default: "ADMIN",
  },
});

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
