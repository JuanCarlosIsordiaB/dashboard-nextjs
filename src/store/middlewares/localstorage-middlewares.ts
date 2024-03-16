import { Dispatch, MiddlewareAPI, Action } from "@reduxjs/toolkit";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {

    next(action);
    
    if(action.type === 'pokemon/toggleFavorite') {
      const { pokemons } = state.getState();
      localStorage.setItem('favorites-pokemons', JSON.stringify(pokemons));
      return;
    }
  };
};
