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
            type: DataTypes.FLOAT(2),
            allowNull: false
        },

        img : {
            type: DataTypes.STRING
        },

        description : {
            type: DataTypes.STRING
        }
    });
    return pizzas;
}