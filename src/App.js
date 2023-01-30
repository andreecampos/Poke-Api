import React, { useState, useEffect } from "react";
import PokemonDetail from './Pages/PokemonDetail';
import Pokedex from './Pages/Pokedex'
import { Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from 'axios';
import axiosCache from 'axios-cache-adapter';


const cache = axiosCache.setupCache({
  maxAge: 15 * 60 * 1000, // 15 min cache
  });
  const api = axios.create({
    adapter: cache.adapter,
    });

function App() {
const [pokemons, setPokemons] = useState([])

    const getGeneration1Pokemon = async () => {

    try {
      const cacheKey = 'https://pokeapi.co/api/v2/pokemon?limit=150?generation=1';
      const cachedResponse = await api.get(cacheKey, { cache: true });

      if (cachedResponse) {
        console.log("answer from cache")
        const generation1Pokemon = cachedResponse.data;
        const allPokemons = [];
      for (const pokemon of generation1Pokemon.results) {
        const pokemonResponse = await api.get(pokemon.url);
        const pokemonData = pokemonResponse.data;
        allPokemons.push(pokemonData);
      }
  
      setPokemons(allPokemons);
        return;
      }  
    } catch (error) {
      console.error(error);
    }
      

    }       
    
 useEffect(()=>{
  getGeneration1Pokemon()
},[])


 
return (
  <div>
    {pokemons && pokemons[0] ? (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex pokemons={pokemons} />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </>
    ) : (
      <div>Loading Pokemons...</div>
    )}
  </div>
);
  
  
};



export default App;
