import {
  GET_POKEMONS,
  GET_TYPES,
  GET_ID,
  GET_NAME,
  POST_POKEMON,
  FILTER_BY_TYPE,
  FILTER_BY_CREATED,
  ORDER_BY_NAME,  
  ORDER_BY_ATAQUE,
} from "./actions";

const initialState = {
  pokemons: [],
  types: [],
  pokemonsID: {},
  pokemonsNAME: {},
};

function filterPokemons(state, action) {
  const selectedTypes = action.payload;
  const filteredPokemons = state.allPokemons.filter((pokemon) => {
    if (selectedTypes.length === 0) {
      return true;
    }
    return selectedTypes.every((type) => pokemon.tipos.includes(type));
  });
  return {
    ...state,
    pokemons: filteredPokemons,
  };
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        pokemonsID: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case POST_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };
    case FILTER_BY_TYPE:
      return filterPokemons(state, action);
      
    case FILTER_BY_CREATED:
      const pokemonsByCreated = state.allPokemons.filter(
        (pokemon) => pokemon.isDB === action.payload
      );
      
      return {
        ...state,
        pokemons: pokemonsByCreated,
      };
      
      case ORDER_BY_NAME:
        let sortedArr = action.payload === 'asc' ?
          state.pokemons.sort(function (a, b){
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return -1;
            }
            return 0
          }) :
          state.pokemons.sort(function(a,b){
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1;
            }
            return 0
          })
        return{
          ...state,
          pokemons: sortedArr
        }

        case ORDER_BY_ATAQUE:
          if (state.pokemons) { 
            const sortedPokemons = action.payload === 'ataquemax'
            ? state.pokemons.sort((a, b) => {
                if (isNaN(a.ataque) || isNaN(b.ataque)) return -1;
                if (parseInt(a.ataque) > parseInt(b.ataque)) return 1;
                if (parseInt(a.ataque) < parseInt(b.ataque)) return -1;
                return 0;
              })
            : state.pokemons.sort((a, b) => {
                if (isNaN(a.ataque) || isNaN(b.ataque)) return -1;
                if (parseInt(a.ataque) > parseInt(b.ataque)) return -1;
                if (parseInt(a.ataque) < parseInt(b.ataque)) return 1;
                return 0;
              });

            return {
              ...state,
              pokemons: sortedPokemons
            };
          } else {
            return state;
          }
    default:
      return { ...state };
  }
};

export default rootReducer;
