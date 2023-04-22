const { getName } = require('../../controllers/controllers')

const getNameHandler = async (req, res) => {
    const { name } = req.query;
    
    const pokemon = await getName(name);
  
    if (pokemon) {
      res.status(200).json(pokemon);
    } else {
      res.status(404).json({ message: `No se encontró ningún Pokémon con el nombre ${name}` });
    }
  };
  

module.exports = {
    getNameHandler,
}