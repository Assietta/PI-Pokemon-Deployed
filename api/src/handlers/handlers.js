const { getPokemonHandler } = require('./modulos/getPokemonsHandler')
const { getIdPokemonHandler } = require('./modulos/getIdPokemonHandler')
const { getNameHandler } = require('./modulos/getNamehandler')
const { getTypesHandler } = require('./modulos/getTypesHandler')
const { postPokemonHandler } = require('./modulos/postPokemonHandler')

module.exports = {
    getPokemonHandler,
    getIdPokemonHandler,
    getNameHandler,
    getTypesHandler,
    postPokemonHandler,
}