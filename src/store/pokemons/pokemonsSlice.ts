import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon },
}

//const getInitialState = (): PokemonsState => {
  //if(typeof window === 'undefined') return {};
  //const favorites = JSON.parse( localStorage.getItem("favorites-pokemons") ?? '{}');

  //return favorites;
//}

const initialState: PokemonsState= {
  favorites: {}
 //...getInitialState(),

}

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {

    setFavoritePokemons(state,action: PayloadAction<{ [key: string]: SimplePokemon }>){
      state.favorites = action.payload;
    },


    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        //Si existe, elimina al pokemon
        delete state.favorites[id];
      } else {
        //Si no existe, agrega al pokemon
        state.favorites[id] = pokemon;
      }

      localStorage.setItem("favorites-pokemons", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
