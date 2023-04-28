const axios = require("axios")
const { pokemon } = require('../../db')
const { cleanData } = require('../helpers/cleanData')



const getAllPokemon = async () => {
  const databasepokemon = await pokemon.findAll();
  const apiPokemonRaw = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.')).data.results;
  const apiPokemonCleaned = await Promise.all(apiPokemonRaw.map(async (p) => {
    const apiPokemonData = (await axios.get(p.url)).data;
    return cleanData(apiPokemonData);
  }));
  return [...databasepokemon, ...apiPokemonCleaned];
};

module.exports = { getAllPokemon, cleanData }
