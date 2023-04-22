const { Router } = require('express');
const { pokemonRouter, typesRouter } = require('./pokemonRoutes');

const router = Router();

router.use("/", pokemonRouter);
router.use("/pokemon", pokemonRouter);
router.use("/pokemon/:idPokemon", pokemonRouter);
router.use("/types", typesRouter);

module.exports = router;
