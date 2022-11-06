import type { InferGetStaticPropsType } from "next";
import Head from 'next/head';
import Image from 'next/image';
import internal from "stream";
import PokemonCard from "../components/ui/pokemonCard";
import { Fragment } from "react";
import { FetchPokemons } from "./api/pokemonList";
import { useDispatch } from 'react-redux';
import { getpokemonListState, set, add } from "../store/pokemonListSlice";
import { useSelector } from "@/store";
import { Pokemon } from "@/pokedexTypes";

export default function Home({
  initialPokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useDispatch();
  dispatch(set(initialPokemons));
  const pokemons = useSelector(getpokemonListState).pokemonList;

  const loadMore = async () => {
    const newPokemons: Pokemon[] = await FetchPokemons(pokemons.length);
    dispatch(add(newPokemons));
  };

  return (
    <Fragment>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          // content="All your Pokémons in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-5 space-y-5">
          {pokemons.map((pokemon: Pokemon) => (
            <PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
            />
          ))}
        </div>
        <button onClick={loadMore} type="button">
          Load more
        </button>
        <br />
        <br />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const initialPokemons: Pokemon[] = await FetchPokemons(0);

  return {
    props: {
      initialPokemons: initialPokemons,
    },
  };
};