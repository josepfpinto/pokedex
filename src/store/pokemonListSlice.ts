import { PokemonsState, Pokemon } from '@/pokedexTypes';
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const initialPokemonList: Pokemon[] = [];
const initialState: PokemonsState = {
  pokemonList: initialPokemonList,
} as const;

export const pokemonListSlice = createSlice({
  name: `pokemons`,
  initialState,
  reducers: {
    set: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.pokemonList>,
    ) => {
      if (state.pokemonList.length === 0) {
        state.pokemonList = action.payload;
      }
    },

    reset: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.pokemonList>,
    ) => {
      state.pokemonList = action.payload;
    },

    add: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.pokemonList>,
    ) => {
      state.pokemonList = [...state.pokemonList, ...action.payload];
    },
  },
});

export const getpokemonListState = (state: { pokemons: PokemonsState }) =>
  state.pokemons;
export const { set, add, reset } = pokemonListSlice.actions;
export default pokemonListSlice.reducer;
