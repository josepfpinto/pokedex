
export type Pokemon = {
    id: string;
    name: string;
    image: string;
}

export type PokemonDetails = {
    id: string;
    name: string;
    species: string;
    image: string;
    abilities: Array<string>;
    baseExperience: string;
    height: string;
    weight: string;
}

export type PokemonsState = {
    pokemonList: Pokemon[],
}
