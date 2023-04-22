const { pokemon, type } = require('../../db');

const createPokemon = async (id, name, vida, ataque, defensa, velocidad, altura, peso, type) =>
  await pokemon.create({
    id,
    name,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    type,
    isDB: true,
  });

  module.exports = {
    createPokemon,
  }
