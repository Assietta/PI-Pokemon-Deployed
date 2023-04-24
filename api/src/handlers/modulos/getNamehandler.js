const { getName } = require('../../controllers/controllers')

const getNameHandler = async (req, res) => {
  try {
    const { name } = req.params;

    const pokemon = await getName(name);

    if (pokemon) {
      res.status(200).json(pokemon);
    } else {
      res.status(404).json({ message: `No se encontró ningún Pokémon con el nombre ${name}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocurrió un error al buscar el Pokémon' });
  }
};

  

module.exports = {
    getNameHandler,
}