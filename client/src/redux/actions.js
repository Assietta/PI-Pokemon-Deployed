import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = 'GET_TYPES'
export const GET_ID = 'GET_ID'
export const GET_NAME = 'GET_NAME'
export const POST_POKEMON = 'POST_POKEMON'
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE'
export const FILTER_BY_CREATED = 'FILTER_BY_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_ATAQUE = 'ORDER_BY_ATAQUE'


export function getPokemons(){
    return async function (dispatch){
        try {
            const response = await axios.get("/pokemon");
            dispatch({
                type: GET_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            console.error("Error while getting pokemons:", error);
        }
    }
}

export function getTypes(){
    return async function (dispatch){
        try {
            const response = await axios.get("/types");
            dispatch({
                type: GET_TYPES,
                payload: response.data
            })
        } catch (error) {
            console.error("Error while getting types:", error);
        }
    }
}

export function getID(id){
    return async function (dispatch){
        try {
            const response = await axios.get(`/pokemon/${id}`);
            dispatch({
                type: GET_ID,
                payload: response.data
            })
        } catch (error) {
            console.error("Error while getting types:", error);
        }
    }
}

export function getName(name){
    return async function (dispatch){
        try {
            const response = await axios.get(`/pokemon/name/${name}`);
            dispatch({
                type: GET_NAME,
                payload: response.data // get the first object in the response array
            })
        } catch (error) {
            console.error("Error while getting types:", error);
        }
    }
}

export function postPokemon(pokemonData){
    return async function (dispatch){

        try {
            const response = await axios.post("/pokemon", JSON.stringify(pokemonData), {
                headers: {
                  "Content-Type": "application/json"
                }
              });
            console.log(response.data)
            dispatch({
                type: POST_POKEMON,
                payload: response.data
            })
            console.log(pokemonData)
        } catch (error) {
            console.error("Error while posting pokemon:", error.response.data.message);
            console.log(error.message);

        }
    }
}

export const filterByType = (selectedTypes) => {
  console.log("selectedTypes", selectedTypes);
  return {
    type: FILTER_BY_TYPE,
    payload: selectedTypes,
    filterFunction: (pokemons) => {
      console.log("pokemons", pokemons);
      const filteredPokemons = selectedTypes.every((selectedType) => {
        return pokemons.tipos.includes(selectedType);
      });
      console.log("filteredPokemons", filteredPokemons);
      return filteredPokemons;
    },
  };
};




  export function filterByCreated(isDB) {
    return {
      type: FILTER_BY_CREATED,
      payload: isDB
    }
  }
  
  export function sortByName(payload){
    console.log(payload);
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function sortByAtaque(payload){
    console.log(payload);
    return {
        type: ORDER_BY_ATAQUE,
        payload
    }
}