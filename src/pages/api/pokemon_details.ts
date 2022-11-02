import { Pokemon, Pokemon_details } from "@/components/pokemons/pokemon_item";

export async function fetchPokemon(id: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url);

    var pokemon: Pokemon_details = {
        id: id,
        name: "",
        image: ""
    };

    if (response.status == 404 || response.statusText == 'Not Found') {
        console.log('Failed response...');
        return pokemon;
    }

    const response_json = await response.json();

    pokemon.name = response_json.name;
    pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return pokemon;
};
