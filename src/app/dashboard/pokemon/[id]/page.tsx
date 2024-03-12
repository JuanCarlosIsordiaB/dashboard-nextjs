interface Props{
  params: {id: string}
}

export default function PokemonPage({params}: Props) {
  
  return (
    <div>
      <h1>Hello Page {params.id}</h1>
    </div>
  );
}