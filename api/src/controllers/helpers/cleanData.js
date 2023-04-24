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

  module.exports = {
    cleanData
  }