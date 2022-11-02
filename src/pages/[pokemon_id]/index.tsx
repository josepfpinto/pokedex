import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from 'next/image';
import { fetchPokemon } from "@/pages/api/pokemon_details";
import PokemonCard from "@/components/ui/pokemoncard";
import { Pokemon_details } from "@/components/pokemons/pokemon_item";

export default function PokemonDetails({
  pokemon_data,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div>
      <PokemonCard
        id={pokemon_data.id}
        name={pokemon_data.name}
        image={pokemon_data.image}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const ids = Array.from({ length: 20 }, (e, i) => i);
  return {
    fallback: true,
    paths: ids.map(id => ({ params: { pokemon_id: id.toString() } })),
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.pokemon_id;
  const pokemon_data: Pokemon_details = await fetchPokemon(id);

  return {
    props: {
      pokemon_data,
    },
  };
};
