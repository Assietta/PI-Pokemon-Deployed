const axios = require('axios')
const { types } = require('../../db')

const getTypes = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/type');
  const types = response.data.results.map((type) => type.name);
  return types;
};


  module.exports = {
    getTypes,
  }