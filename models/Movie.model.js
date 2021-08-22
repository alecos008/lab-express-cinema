const { Schema, model } = require("mongoose");

//* Defining the DB schema
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  decription: String,
  showtimes: Array,
});

module.exports = model("Movie", movieSchema);
