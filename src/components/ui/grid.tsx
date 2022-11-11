import { Pokemon } from '@/pokedexTypes';
import { PokemonCard } from '@/components/ui/singlePokemonCard';
import { getpokemonListState } from '../../store/pokemonListSlice';
import { useSelector } from '@/store';

export function Grid() {
  const pokemons = useSelector(getpokemonListState).pokemonList;
  const emptyList = pokemons.length == 0;
  let myGrid;

  if (emptyList) {
    myGrid = (
      <div className="grid place-items-center space-y-32">
        <p> </p>
        <h2 className="text-gray-50">Sorry, no Pokemons found...</h2>
      </div>
    );
  } else {
    myGrid = (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-1 items-center justify-center">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </div>
    );
  }

  return <div>{myGrid}</div>;
}
