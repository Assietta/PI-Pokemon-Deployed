const { createPokemon } = require('../../controllers/controllers')

const postPokemonHandler = async (req, res) => {
    try {
        const { id, name, vida, ataque, defensa, velocidad, altura, peso, type, isDB } = req.body;
        const newPokemon = await createPokemon( id, name, vida, ataque, defensa, velocidad, altura, peso, type, true);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
};

module.exports = {
    postPokemonHandler,
}