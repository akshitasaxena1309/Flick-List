const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  cart: [
    {
      movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
      },
    },
  ],
});

module.exports = User;
