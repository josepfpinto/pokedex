import { Pokemon } from "@/pokedexTypes";
import { add, getpokemonListState } from "../../store/pokemonListSlice";
import { useDispatch, useSelector } from "@/store";
import { FetchPokemons } from "@/pages/api/pokemonList";
import styles from "../../styles/pokemon.module.css";

export default function ButtonMore() {
    const dispatch = useDispatch();
    const pokemons = useSelector(getpokemonListState).pokemonList;

    const loadMore = async () => {
        const newPokemons: Pokemon[] = await FetchPokemons(pokemons.length);
        dispatch(add(newPokemons));
    };

    return (
        <button onClick={loadMore} type="button" className="rounded-full font-light mx-auto px-8 py-2 text-gray-50 bg-slate-700 hover:bg-slate-500">
            Load more
        </button>
    );
};
