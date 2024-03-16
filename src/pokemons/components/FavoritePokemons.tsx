"use client";

import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);

  //Convertimos el objeto en arreglo
  const pokemonArray = Object.values(favoritePokemons);

  //const [pokemons, setPokemons] = useState(pokemonArray);

  //useEffect(() => {
  //setPokemons(pokemonArray);
  //}, [favoritePokemons]);

  return (
    <>
      {
        //Si no hay pokemons favoritos
        pokemonArray.length === 0 ? (
          <div className="flex flex-col items-center mt-9">
            <h2 className="text-gray-500 text-xl">No hay pokemons favoritos</h2>
          </div>
        ) : (
          <PokemonGrid pokemons={pokemonArray} />
        )
      }
    </>
  );
};
