const { Router } = require('express');
const pokemonRouter = require("./pokemonRoutes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", pokemonRouter);
router.use("/pokemon", pokemonRouter);
router.use("/pokemon/:idPokemon", pokemonRouter);
router.use("/pokemon", pokemonRouter);
router.use("/temperaments", pokemonRouter);

module.exports = router;
