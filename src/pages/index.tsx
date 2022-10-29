import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from 'next/head';
import Image from 'next/image';
import internal from "stream";
import Navbar from "../components/ui/navbar";
import PokemonCard from "../components/ui/pokemoncard";
import { Pokemon } from "../components/pokemons/pokemon_item";

export default function Home({
  pokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  <Head>
    <title>Pokedex</title>
    <meta
      name="description"
      content="All your Pokémons in one place"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>

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
    </div>
  );
};

export async function getStaticProps() {
  var pokemons: Pokemon[] = []
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20"
  const response = await fetch(url);

  if (response.status == 404 || response.statusText == 'Not Found') {
    console.log('Failed response...');
    return {
      props: {
        pokemons,
      },
    };
  }

  const response_json = await response.json();

  for (var i = 0; i < response_json.results.length; i++) {

    const pokemon: Pokemon = {
      id: response_json.results[i].url.split('/').at(-2),
      name: response_json.results[i].name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`
    };

    pokemons.push(pokemon);
  };

  return {
    props: {
      pokemons,
    },
  };
};
