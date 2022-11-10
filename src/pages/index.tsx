import type { InferGetStaticPropsType } from "next";
import Head from 'next/head';
import { Fragment } from "react";
import { FetchPokemons } from "./api/pokemonList";
import { useDispatch } from 'react-redux';
import { getpokemonListState, set, add } from "../store/pokemonListSlice";
import { useSelector } from "@/store";
import { Pokemon } from "@/pokedexTypes";
import Grid from "@/components/ui/grid";
import ButtonMore from "@/components/ui/buttonMore";

export default function Home({
  initialPokemons,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useDispatch();
  dispatch(set(initialPokemons));

  return (
    <Fragment>
      <Head>
        <title>Pokedex</title>
        <meta
          name="All your Pokémons in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col space-y-10 pb-10">
        <Grid />
        <ButtonMore />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const initialPokemons: Pokemon[] = await FetchPokemons();

  return {
    props: {
      initialPokemons: initialPokemons,
    },
  };
};