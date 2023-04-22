const { pokemon, type } = require('../../db');

const createPokemon = async (id, name, hp, attack, defense, speed, height, weight, type) =>
  await pokemon.create({
    id,
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    type,
    isDB: true,
  });

  module.exports = {
    createPokemon,
  }
