import { Pokemon } from '@/pokedexTypes';
import { reset, add, getpokemonListState } from '../../store/pokemonListSlice';
import { useDispatch, useSelector } from '@/store';
import { FetchPokemons } from '@/pages/api/pokemonList';
import styles from '../../styles/pokemon.module.css';

export function ButtonMore() {
  const dispatch = useDispatch();
  const pokemons = useSelector(getpokemonListState).pokemonList;
  let buttonMore;

  const loadMore = async () => {
    const newPokemons: Pokemon[] = await FetchPokemons(pokemons.length);
    dispatch(add(newPokemons));
  };

  const resetAction = async () => {
    const newPokemons: Pokemon[] = await FetchPokemons(0);
    dispatch(reset(newPokemons));
  };

  if (pokemons.length <= 1) {
    buttonMore = (
      <button
        onClick={resetAction}
        type="button"
        className={`${styles.buttonBody}`}
      >
        Return
      </button>
    );
  } else {
    buttonMore = (
      <button
        onClick={loadMore}
        type="button"
        className={`${styles.buttonBody}`}
      >
        Load more
      </button>
    );
  }

  return <div className="mx-auto">{buttonMore}</div>;
}
