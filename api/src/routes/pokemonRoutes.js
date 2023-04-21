const { Router } = require('express');

const pokemonRouter = Router();

const {getPokemonHandler, getRazaHandler, getNameHandler, postpokemonHandler, getTemperamentsHandler} = require("../handlers/handlers")




pokemonRouter.get("/", (req, res) => {
  res.send("estoy en pokemon");
});

pokemonRouter.get("/pokemon", getPokemonHandler);

//pokemonRouter.get("/pokemon/:idRaza", getRazaHandler);

//pokemonRouter.get("/pokemon/name", getNameHandler);

//pokemonRouter.post("/pokemon", postpokemonHandler);

//pokemonRouter.get("/type", getTemperamentsHandler);

module.exports = pokemonRouter;