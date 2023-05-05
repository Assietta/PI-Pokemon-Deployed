import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = 'GET_TYPES'
export const GET_ID = 'GET_ID'
export const GET_NAME = 'GET_NAME'
export const POST_POKEMON = 'POST_POKEMON'

export function getPokemons(){
    return async function (dispatch){
        try {
            const response = await axios.get("http://localhost:3001/pokemon");
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
            const response = await axios.get("http://localhost:3001/types");
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
            const response = await axios.get(`http://localhost:3001/pokemon/${id}`);
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
            const response = await axios.get(`http://localhost:3001/pokemon/name/${name}`);
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
            const response = await axios.post("http://localhost:3001/pokemon", JSON.stringify(pokemonData), {
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

