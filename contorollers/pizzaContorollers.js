const Pizzas = require("../models/pizzas");

const getAllPizzas = (req, res) => {
  Pizzas.getAllPizzas().then((result) => {
    res.send(result);
  });
};

module.exports = { getAllPizzas };
