import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";


const getPokemons = async (
  limit = 10,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(200);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons List <small>static</small>.{" "}
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
