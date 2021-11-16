const db = require("../models");
const Tutorial = db.pizzas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      const pizzas = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        description: req.body.description
      };
    
      // Save in the database
      Pizzas.create(pizzas)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });      
};