import { GET_POKEMONS, GET_TYPES, GET_ID, GET_NAME, POST_POKEMON, FILTER_BY_TYPE, FILTER_BY_CREATED } from "./actions";

const initialState = {
    pokemons: [],
    types: [],
    pokemonsID: {},
    pokemonsNAME: {},
  }
  
  const rootReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_POKEMONS:
        return {...state,
           pokemons: action.payload,
          };
        case GET_TYPES:
        return {...state,
            types: action.payload,
              };
        case GET_ID:
        return {...state,
            pokemonsID: action.payload,
              };
        case GET_NAME:
        return {...state,
            pokemons: action.payload,
              };
        case POST_POKEMON:
          return {...state,
            pokemons: action.payload,
              };
        case FILTER_BY_TYPE:
          const pokemonsByType = state.pokemons.filter(pokemon => pokemon.tipos.includes(action.payload))
          return {
            ...state,
            pokemons: pokemonsByType
          }
        case FILTER_BY_CREATED:
          const pokemonsByCreated = state.pokemons.filter(pokemon => pokemon.isDB === action.payload)
          return {
            ...state,
            pokemons: pokemonsByCreated
          }
        default:
              return { ...state };
      }
  };
  
  export default rootReducer;