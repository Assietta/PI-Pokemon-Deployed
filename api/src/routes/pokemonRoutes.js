const { Router } = require('express');

const pokemonRouter = Router();

const typesRouter = Router();

const {getPokemonHandler, getIdPokemonHandler, getNameHandler, postPokemonHandler, getTypesHandler} = require("../handlers/handlers")



pokemonRouter.get("/", (req, res) => {
  res.send("estoy en pokemon");
});

typesRouter.get("/", getTypesHandler);

pokemonRouter.get("/pokemon", getPokemonHandler);

pokemonRouter.get("/pokemon/:idPokemon", getIdPokemonHandler);

pokemonRouter.get("/pokemon/name", getNameHandler);

pokemonRouter.post("/pokemon", postPokemonHandler);

//pokemonRouter.get("/types", getTypesHandler);

module.exports = pokemonRouter;
module.exports = typesRouter;