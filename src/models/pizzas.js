const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {

    class Pizza extends Model { };

    Pizza.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT(2),
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description : {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'pizza',

        name: {
            simple: 'pizza',
            plural: 'pizzas',
        }
    });

    
    return Pizza;
}