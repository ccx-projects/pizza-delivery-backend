const pgp = require("pg-promise")();
const db = pgp("postgres://nao:@localhost:5432/pizza_delivery");

const getAllPizzas = () => {
  return db.any("SELECT * FROM pizzas");
};

module.exports = { getAllPizzas };
