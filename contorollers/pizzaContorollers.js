const Pizzas = require("../models/pizza");

const getAllPizzas = (req, res) => {
  console.log(`in contorollers`, Pizzas.getAllPizzas);
  Pizzas.getAllPizzas().then((result) => {
    res.send(result);
  });
};

module.exports = { getAllPizzas };
