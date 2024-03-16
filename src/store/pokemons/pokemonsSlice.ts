import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": { id: "1", name: "bulbasaur" },
  '2':{id:'2', name: 'venusaur'},
  '3' : {id:'3', name: 'ivysaur'}
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

      console.log(initialState);
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
