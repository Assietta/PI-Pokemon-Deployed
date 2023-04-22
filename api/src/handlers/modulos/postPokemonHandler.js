const { createPokemon } = require('../../controllers/controllers')

const postPokemonHandler = async (req, res) => {
    try {
        const { id, name, hp, attack, defense, speed, height, weight, type, isDB } = req.body;
        const newPokemon = await createPokemon( id, name, hp, attack, defense, speed, height, weight, type, isDB = true);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
};

module.exports = {
    postPokemonHandler,
}