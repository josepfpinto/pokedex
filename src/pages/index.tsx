import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from 'next/head';
import Image from 'next/image';
import internal from "stream";
import Navbar from "../components/ui/navbar";
import PokemonCard from "../components/ui/pokemoncard";
import { Pokemon } from "../components/pokemons/pokemon_item";
import { useState } from "react";
import { fetchPokemons } from "@/components/pokemons/pokemon_list";

export default function Home({
  initial_pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  <Head>
    <title>Pokedex</title>
    <meta
      name="description"
      content="All your Pokémons in one place"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  const [pokemons, setPosts] = useState(initial_pokemons);

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />

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
        const newPosts = await fetchPokemons(pokemons.length);
        setPosts([...pokemons, ...newPosts]);
      }}
        type="button">
        Load more
      </button>
      
    </div>
  );
};

export async function getStaticProps() {
  const initial_pokemons: Pokemon[] = await fetchPokemons(0);

  return {
    props: {
      initial_pokemons,
    },
  };
};
