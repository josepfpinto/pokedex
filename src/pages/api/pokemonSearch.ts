import { Pokemon } from "@/pokedexTypes";

export async function SearchPokemon(name: string) {
    if (!name) return;
    let pokemons: Pokemon[] = [];
    const url: string = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);

    if (response.status == 404 || response.statusText == 'Not Found') {
        console.log('Failed response...');
        return pokemons;
    }

    const responseJson = await response.json();

    const pokemon: Pokemon = {
        id: responseJson.id,
        name: responseJson.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${responseJson.id}.svg`
    };
    pokemons.push(pokemon);

    return pokemons;
};
