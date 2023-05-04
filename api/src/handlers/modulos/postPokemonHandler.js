const { createPokemon } = require('../../controllers/controllers')

const postPokemonHandler = async (req, res) => {
    try {
        const { id, name, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos, isDB } = req.body;
        console.log(req.body);
        const newPokemon = await createPokemon( id, name, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos, true);
        console.log(newPokemon);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
};

module.exports = {
    postPokemonHandler,
}