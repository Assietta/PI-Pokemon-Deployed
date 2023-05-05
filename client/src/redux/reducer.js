import { GET_POKEMONS, GET_TYPES, GET_ID, GET_NAME, POST_POKEMON } from "./actions";

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
        default:
              return { ...state };
      }
  };
  
  export default rootReducer;