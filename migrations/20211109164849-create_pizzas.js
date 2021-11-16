'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("pizzas",{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    },

    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },

    price: {
        type: Sequelize.FLOAT(2),
        allowNull: false
    },

    img : {
        type: Sequelize.STRING
    },

    description : {
        type: Sequelize.STRING
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pizzas");
  }
};
