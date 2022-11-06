import type { InferGetStaticPropsType } from "next";
import Image from 'next/image';
import { FetchPokemon } from "@/pages/api/pokemonDetails";
import PokemonDetailsCard from "@/components/ui/pokemonDetailsCard";
import { Fragment } from "react";
import Head from 'next/head';
import { PokemonDetails } from "@/pokedexTypes";

export default function PokemonDetailsPage({
  pokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <Fragment>
      <Head>
        <title>Pokemon details</title>
        <meta
          name="description"
          content={pokemonData.name}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonDetailsCard
        id={pokemonData.id}
        name={pokemonData.name}
        image={pokemonData.image}
        abilities={pokemonData.abilities}
        baseExperience={pokemonData.baseExperience}
        height={pokemonData.height}
        weight={pokemonData.weight}
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const ids: Array<number> = Array.from({ length: 20 }, (e, i) => i);
  return {
    fallback: true,
    paths: ids.map(id => ({ params: { pokemonId: id.toString() } })),
  };
}

export async function getStaticProps(context: any) {
  const id: string = context.params.pokemonId;
  const pokemonData: PokemonDetails = await FetchPokemon(id);

  return {
    props: {
      pokemonData,
    },
  };
};
