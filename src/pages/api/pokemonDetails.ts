import { PokemonDetails } from '@/pokedexTypes';

export async function FetchPokemon(id: string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);

  const pokemon: PokemonDetails = {
    id: id,
    name: ``,
    species: ``,
    image: ``,
    abilities: [],
    baseExperience: ``,
    height: ``,
    weight: ``,
  };

  if (response.status == 404 || response.statusText == `Not Found`) {
    console.log(`Failed response...`);
    return pokemon;
  }

  const responseJson = await response.json();

  pokemon.name = responseJson.name;
  pokemon.species = responseJson.species.name;
  pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  pokemon.baseExperience = responseJson.base_experience;
  pokemon.height = responseJson.height;
  pokemon.weight = responseJson.weight;
  pokemon.abilities = responseJson.abilities.map(
    (element: any) => element[`ability`][`name`],
  );

  return pokemon;
}
