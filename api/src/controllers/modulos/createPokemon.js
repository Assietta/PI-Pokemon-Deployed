const { pokemon, type } = require('../../db');

const createPokemon = async (id, name, imagen, vida, ataque, defensa, velocidad, altura, peso, tipos) =>
await pokemon.create({
  id: Math.floor(Math.random() * 10000),
  name,
  imagen,
  vida,
  ataque,
  defensa,
  velocidad,
  altura,
  peso,
  tipos,
  isDB: true,
});
console.log(pokemon.tipos);

  module.exports = {
    createPokemon,
  }
