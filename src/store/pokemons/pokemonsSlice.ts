import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        //Si existe, elimina al pokemon
        delete state[id];
        return;
      }
      //Si no existe, agrega al pokemon
      state[id] = pokemon;

      localStorage.setItem("favorites-pokemons", JSON.stringify(state));

    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
