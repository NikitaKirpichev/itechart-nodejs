module.exports = app => {
    const pizzas = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new pizza
    router.post("/", pizzas.create);

    app.use('/api/pizzas',router);
}
