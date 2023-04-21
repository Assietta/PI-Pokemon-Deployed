const { getIdPokemon } = require('../../controllers/controllers')


const getIdPokemonHandler = async (req, res) => {
    const { idPokemon } = req.params;

    try {
      const pokemonApi = await getIdPokemon(idPokemon);
      if (!pokemonApi) {
        return res.status(404).send("Pokemon not found");
      }
      return res.status(200).json(pokemonApi);
    } catch (err) {
      return res.status(500).send(err.message);
    }
};


module.exports = {
    getIdPokemonHandler,
}