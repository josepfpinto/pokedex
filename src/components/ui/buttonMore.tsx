import { Pokemon } from "@/pokedexTypes";
import { add, getpokemonListState } from "../../store/pokemonListSlice";
import { useDispatch, useSelector } from "@/store";
import { FetchPokemons } from "@/pages/api/pokemonList";
import Link from "next/link";
import styles from "../../styles/pokemon.module.css";

export default function ButtonMore() {
    const dispatch = useDispatch();
    const pokemons = useSelector(getpokemonListState).pokemonList;
    let buttonMore

    const loadMore = async () => {
        const newPokemons: Pokemon[] = await FetchPokemons(pokemons.length);
        dispatch(add(newPokemons));
    };

    if (pokemons.length == 0) {
        buttonMore = <Link href="/">
            <button type="button" className={`${styles.buttonBody}`}>
                Return
            </button>
        </Link>;
    } else {
        buttonMore = <button onClick={loadMore} type="button" className={`${styles.buttonBody}`}>
            Load more
        </button>
    }

    return (
        <div className="mx-auto">
            {buttonMore}
        </div>
    );
};
