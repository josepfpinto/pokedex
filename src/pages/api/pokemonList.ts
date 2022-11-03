import { Pokemon } from "@/components/pokemons/pokemonItem";

export async function FetchPokemons(offsetPokemon:number) {
    let pokemons: Pokemon[] = []
    const url: string = `https://pokeapi.co/api/v2/pokemon/?offset=${offsetPokemon}&limit=20`
    const response = await fetch(url);

    if (response.status == 404 || response.statusText == 'Not Found') {
        console.log('Failed response...');
        return pokemons;
    }

    const responseJson = await response.json();

    for (let i = 0; i < responseJson.results.length; i++) {

        const pokemon: Pokemon = {
            id: responseJson.results[i].url.split('/').at(-2),
            name: responseJson.results[i].name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg`
        };

        pokemons.push(pokemon);
    };

    return pokemons;
};
