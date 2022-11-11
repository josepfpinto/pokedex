import { configureStore } from '@reduxjs/toolkit';
import pokemonListSlice from './pokemonListSlice';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    pokemons: pokemonListSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { pokemons: PokemonsState}
type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
// eslint-disable-next-line prettier/prettier
export const useSelector = <TSelected = unknown,>(
  selector: (state: RootState) => TSelected,
): TSelected => useSelectorBase<RootState, TSelected>(selector);
