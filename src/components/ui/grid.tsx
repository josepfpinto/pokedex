import { Pokemon } from "@/pokedexTypes";
import PokemonCard from "./pokemonCard";
import { getpokemonListState } from "../../store/pokemonListSlice";
import { useSelector } from "@/store";

export default function Grid() {
    const pokemons = useSelector(getpokemonListState).pokemonList;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-1 items-center justify-center">
            {pokemons.map((pokemon: Pokemon) => (
                <PokemonCard
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                />
            ))}
        </div>
    );
};

