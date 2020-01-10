const Pizzas = require("../models/pizza");

const getAllPizzas = (req, res) => {
  Pizzas.getAllPizzas().then((result) => {
    res.send(result);
  });
};

module.exports = { getAllPizzas };
