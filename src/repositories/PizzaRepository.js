const db = require("../models");

class PizzaRepository {
    
    static async destroy(id) {
		return await db.pizza.destroy({where: { id: id }})
    }

	static async update(id, pizza) {
		return await db.pizza.update(pizza, {where: { id: id }})
	}

    static async getByName(name) {
        const getCandidate = await db.Pizza.findOne({where: {name}});
        return getCandidate;
    }

    static async create(pizza) {
        const pizza = new.db.Pizza({id,name,price,img,description});
        await pizza.save();
        return pizza;
    }
}

module.exports = Pizza;