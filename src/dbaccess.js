
module.exports = async () => {

    const Pizzas = require("./models/pizzas");

    const pizza = await Pizzas.create({
        id: "1",
        name: "peperonni",
        price: "12,7",
        img: "1",
        description: "1"
    })

    console.log("Added pizza: ", JSON.stringify(pizzas));
}