const axios = require('axios')
const { pokemon } = require('../../db')
const { cleanData } = require('../helpers/cleanData')

 

const getName = async (name) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = response.data;
    const pokemon = cleanData(data);
    return [pokemon];
  } catch (error) {
    // Si el Pokémon no se encuentra en la API, buscarlo en la base de datos local
    const pokemonFromDb = await pokemon.getName(name.toLowerCase());
    if (pokemonFromDb) {
      return [pokemonFromDb];
    } else {
      // Si no se encuentra en la base de datos tampoco, retornar un mensaje de error adecuado
      return [{ message: `No se encontró ningún Pokémon con el nombre ${name}` }];
    }
  }
};

  
  

module.exports = {
    getName,
}