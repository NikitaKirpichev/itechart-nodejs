const PizzaRepository = require('../repositories/PizzaRepository');

class PizzaService{
    add = async (name) =>{
        const getCandidate = await PizzaRepository.getByName(name);
        
        if (getCandidate){
            console.log('pizza exists');
        }
    }
}