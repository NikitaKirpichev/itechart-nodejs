module.exports = (sequelize, Sequelize) =>{
    const pizzas = sequelize.define("pizzas",{
    
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
    });
    return pizzas;
}