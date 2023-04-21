const axios = require("axios")
const { pokemon, type } = require('../../db');
const { getAllPokemon } = require("./getAllPokemon");

const getIdPokemon = async (id) => {
    const pokemon = await getAllPokemon();
    const foundPokemon = await pokemon.find((d) => d.id == id);
    return foundPokemon;
  };

  module.exports = {
    getIdPokemon,
  }