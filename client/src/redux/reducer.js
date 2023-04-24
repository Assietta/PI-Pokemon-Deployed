const initialState = {
    pokemons: [],
    types: [],
  }
  
  const rootReducer = (state = initialState, action) => {
      switch (action.type) {
          default:
              return { ...state };
      }
  };
  
  export default rootReducer;