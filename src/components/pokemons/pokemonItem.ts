
export interface Pokemon {
    id: string;
    name: string;
    image: string;
}

export interface PokemonDetails {
    id: string;
    name: string;
    image: string;
    abilities: Array<string>;
    baseExperience: string;
    height: string;
    weight: string;
}
