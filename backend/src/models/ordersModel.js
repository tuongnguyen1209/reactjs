const mongoose = require("mongoose");

const { Schema } = mongoose;

const ordersSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: [true, "user is require"],
  },
  detail: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: Number,
      price: Number,
    },
  ],
  createAt: {
    type: Date,
    default: new Date(),
  },
  createBy: {
    type: String,
    default: "ADMIN",
  },
});

ordersSchema.pre(/^find/, function (next) {
  this.populate([
    { path: "user", select: "-__v" },
    { path: "product", select: "-__v" },
  ]);
  next();
});

const OrdersModel = mongoose.model("orders", ordersSchema);

module.exports = OrdersModel;
