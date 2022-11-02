import { Pokemon } from "@/components/pokemons/pokemon_item";

export async function fetchPokemons(offset_pokemon:number) {
    var pokemons: Pokemon[] = []
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset_pokemon}&limit=20`
    const response = await fetch(url);

    if (response.status == 404 || response.statusText == 'Not Found') {
        console.log('Failed response...');
        return pokemons;
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

    return pokemons;
};
