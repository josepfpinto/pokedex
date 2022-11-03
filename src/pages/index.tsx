import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from 'next/head';
import Image from 'next/image';
import internal from "stream";
import PokemonCard from "../components/ui/pokemonCard";
import { Pokemon } from "../components/pokemons/pokemonItem";
import { Fragment, useState } from "react";
import { FetchPokemons } from "./api/pokemonList";

export default function Home({
  initialPokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [pokemons, setPosts] = useState(initialPokemons);

  return (
    <Fragment>
      <Head>
        <title>Pokedex</title>
        <meta
          name="description"
          content="All your Pokémons in one place"
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

        <button onClick={async () => {
          const newPokemons: Pokemon[] = await FetchPokemons(pokemons.length);
          setPosts([...pokemons, ...newPokemons]);
        }}
          type="button">
          Load more
        </button>

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
