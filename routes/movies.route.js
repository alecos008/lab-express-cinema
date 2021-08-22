const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

require("../db");

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(`your movies ${movies}`);
      res.render("movies", { movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render("details", { movie });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
