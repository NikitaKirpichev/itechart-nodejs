const pizzaRepository = require('../repositories/PizzaRepository');

class PizzaService{
    addPizza = async (name) =>{
        const getCandidate = await PizzaRepository.getByName(name);
        
        if (getCandidate){
            console.log('pizza exists');
        }
    }
}