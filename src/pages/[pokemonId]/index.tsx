import type { InferGetStaticPropsType } from 'next';
import { FetchPokemon } from '@/pages/api/pokemonDetails';
import PokemonDetailsCard from '@/components/ui/pokemonDetailsCard';
import { Fragment } from 'react';
import Head from 'next/head';
import { PokemonDetails } from '@/pokedexTypes';

export default function PokemonDetailsPage({
  pokemonData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  let pokemonCard;

  if (pokemonData === undefined) {
    pokemonCard = (
      <div className="grid place-items-center space-y-32">
        <p> </p>
        <h2 className="text-gray-50">Sorry, something went wrong...</h2>
      </div>
    );
  } else {
    pokemonCard = (
      <PokemonDetailsCard
        id={pokemonData.id}
        name={pokemonData.name}
        species={pokemonData.species}
        image={pokemonData.image}
        abilities={pokemonData.abilities}
        baseExperience={pokemonData.baseExperience}
        height={pokemonData.height}
        weight={pokemonData.weight}
      />
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Pokemon details</title>
        <meta
          name="description"
          content={pokemonData === undefined ? `` : pokemonData.name}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {pokemonCard}
    </Fragment>
  );
}

export async function getStaticPaths() {
  const ids: Array<number> = Array.from({ length: 21 }, (e, i) => i);
  return {
    fallback: true,
    paths: ids.map((id) => ({ params: { pokemonId: id.toString() } })),
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
}
