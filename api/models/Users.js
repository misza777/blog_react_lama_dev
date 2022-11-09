const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your name..."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email..."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password..."],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
