const express = require("express");
const router = express.Router();

const pgp = require("pg-promise")(/* options */);
// const pgp = require("../app");
const db = pgp("postgres://nao@host:5432/pizza_delivery");

db.one("SELECT $1 AS value", 123)
  .then(function(data) {
    console.log("DATA:", data.value);
  })
  .catch(function(error) {
    console.log("ERROR:", error);
  });

const pizzaData = router.get("/pizzas", (req, res) => {
  res.status(200);
  res.json(pizzaData);
});

// router.get("/", (req, res) => {
//   res.send("Margerita!");
//   // res.render("index", { title: "Express" });
// });

module.exports = router;
