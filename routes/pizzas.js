const express = require("express");
const router = express.Router();

const pgp = require("pg-promise")(/* options */);
const db = pgp("postgres://nao:@localhost:5432/pizza_delivery");

router.get("/", async (req, res) => {
  const menu = await db.any("SELECT * FROM pizzas");
  res.status(200);
  // res.send("pizzas");
  res.send(menu);
});

module.exports = router;
