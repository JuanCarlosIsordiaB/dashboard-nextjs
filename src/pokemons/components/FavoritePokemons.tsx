"use client";

import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons);

  const pokemonArray = Object.values(favoritePokemons);

  return (
    <div>
      <h2>Favorite Pokemons</h2>
      <div>
        <PokemonGrid pokemons={pokemonArray} />
      </div>
    </div>
  );
};
