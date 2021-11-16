module.exports = app => {
    const tutorials = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new pizza
    router.post("/", pizzas.create);
}
