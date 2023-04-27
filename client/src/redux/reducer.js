import { GET_POKEMONS, GET_TYPES, GET_ID } from "./actions";

const initialState = {
    pokemons: [],
    types: [],
    pokemonsID: {},
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
        default:
              return { ...state };
      }
  };
  
  export default rootReducer;