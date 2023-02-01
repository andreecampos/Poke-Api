import axios from "axios";
import axiosCache from "axios-cache-adapter";

const cache = axiosCache.setupCache({
  maxAge: 15 * 60 * 1000, // 15 min cache
});
const api = axios.create({
  adapter: cache.adapter,
});

export const getGeneration1Pokemon = async (offset = 0, limit = 10) => {
  try {
    const cacheKey = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}&generation=1`;
    const cachedResponse = await api.get(cacheKey, { cache: true });

    if (cachedResponse) {
      return cachedResponse.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPokemonData = async (pokemon) => {
  try {
    const pokemonResponse = await api.get(pokemon.url);
    const pokemonData = pokemonResponse.data;
    return pokemonData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const fetchAllPokemonData = async (pokemons) => {
  try {
    const allPokemons = [];
    for (const pokemon of pokemons) {
      const pokemonData = await fetchPokemonData(pokemon);
      allPokemons.push(pokemonData);
    }
    return allPokemons;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
