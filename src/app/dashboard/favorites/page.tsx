import {
  FavoritePokemons,
  PokemonGrid,
  PokemonsResponse,
  SimplePokemon,
} from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Listado de pokemons favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items center">
        <span className="text-3xl my-2">
          Favorites Pokemons List <small>Global State</small>.{" "}
        </span>
        <button className="bg-red-500 rounded-md px-2 text-white font-bold hover:bg-red-400 transition-all ">Clear all</button>
      </div>

      <FavoritePokemons />
    </div>
  );
}
