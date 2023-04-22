const axios = require('axios')
const { pokemon } = require('../../db')

const cleanData = (data) => {
    const imagen = data.sprites && data.sprites.front_default ? data.sprites.front_default : '';
    const vida = data.stats && Array.isArray(data.stats) ? data.stats.find(s => s.stat.name === 'hp').base_stat : '';
    const ataque = data.stats && Array.isArray(data.stats) ? data.stats.find(s => s.stat.name === 'attack').base_stat : '';
    const defensa = data.stats && Array.isArray(data.stats) ? data.stats.find(s => s.stat.name === 'defense').base_stat : '';
    const velocidad = data.stats && Array.isArray(data.stats) ? data.stats.find(s => s.stat.name === 'speed').base_stat : '';
    const tipos = data.types && Array.isArray(data.types) ? data.types.map(t => t.type.name) : [];
    return {
      id: data.id,
      name: data.name,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura: data.height,
      peso: data.weight,
      tipos,
      isDB: false,
    };
  };
  
 

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