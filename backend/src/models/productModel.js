const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "price is require"],
  },
  price: {
    type: String,
    required: [true, "price is require"],
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "category",
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

productSchema.pre(/^find/, function (next) {
  this.populate([{ path: "category", select: "-__v" }]);
  next();
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
