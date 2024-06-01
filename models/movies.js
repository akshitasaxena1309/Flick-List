const mongoose = require("mongoose");

const Movie = mongoose.model("Movie", {
  title: {
    type: String,
    required: true,
    //unique lgana h
  },

  img: {
    type: String,
    required: true,
  },
});

module.exports = Movie;
