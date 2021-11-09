const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pizza_delivery", "root",
    {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
global.sequelize = sequelize;