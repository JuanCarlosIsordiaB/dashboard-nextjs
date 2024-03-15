import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Listado de pokemons favoritos",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Favorites Pokemons List <small>Global State</small>.{" "}
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
