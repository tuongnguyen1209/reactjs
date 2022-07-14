const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is require"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is require"],
    },
    email: {
      type: String,
      required: [true, "Email is require"],
      unique: true,
    },
    fullname: {
      type: String,
    },
    role: {
      type: String,
      enum: {
        values: ["ADMIN", "USER"],
        message: "{VALUE} is not support",
      },
      required: [true, "Role is require"],
      default: "USER",
    },
    status: {
      type: String,
      enum: {
        values: ["ACTIVE", "STOP WORKING"],
        message: "{VALUE} is not support",
      },
      required: [true, "status is require"],
      default: "ACTIVE",
    },
    createAt: {
      type: Date,
      default: new Date(),
    },
    createBy: {
      type: String,
      default: "ADMIN",
    },
  },
  {
    strict: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
