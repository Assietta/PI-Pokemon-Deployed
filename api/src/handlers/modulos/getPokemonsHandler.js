const { getAllPokemon } = require('../../controllers/controllers')


const getPokemonHandler = async (req, res) => {
    try {
        const pokemon = await getAllPokemon();
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({error: error.message })
    };
};

module.exports = {
    getPokemonHandler,
}