const { getAllPokemon } = require('./modulos/getAllPokemon')
const { getIdPokemon } = require('./modulos/getIdPokemon')
const { getName } = require('./modulos/getName')
const { getTypes } = require('./modulos/getTypes')
const { createPokemon } = require('./modulos/createPokemon')

module.exports = {
    getAllPokemon,
    getIdPokemon,
    getName,
    getTypes,
    createPokemon,
}