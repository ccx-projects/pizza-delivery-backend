const express = require("express");
const router = express.Router();
const pizzaController = require("../contorollers/pizzaContorollers");

router.get("/", pizzaController.getAllPizzas);

module.exports = router;
