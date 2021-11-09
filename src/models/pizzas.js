const { DataTypes }= require("sequelize");

let pizzas = [
    'pizzas',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },

        name: {
            type: DataTypes.STRING(100),
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
    },
    {
        timestamps: false
    }
]

module.exports = pizzas;