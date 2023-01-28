import React, { useState, useEffect } from "react";
import PokemonDetail from './Pages/PokemonDetail';
import Pokedex from './Pages/Pokedex'
import { Route,Routes} from "react-router-dom";

import Navbar from "./components/Navbar";


function App() {
const [pokemons, setPokemons] = useState([])
    // console.log("pokemons",pokemons)

    async function getGeneration1Pokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150?generation=1');
      const generation1Pokemon = await response.json();
      // console.log(generation1Pokemon)
      const allPokemons = []
      for (const pokemon of generation1Pokemon.results) {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          // console.log(pokemonData.name, pokemonData.sprites.front_default);
          allPokemons.push(pokemonData)
      }
      setPokemons(allPokemons)
    }       
    
 useEffect(()=>{
  getGeneration1Pokemon()
},[])

    // async function getGeneration1Pokemon(start) {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon?generation=1');
//   const generation1Pokemon = await response.json();

//   for (let i = start; i < generation1Pokemon.results.length && i < start+10; i++) {
//       const pokemonResponse = await fetch(generation1Pokemon.results[i].url);
//       const pokemonData = await pokemonResponse.json();
//       // console.log(pokemonData.name, pokemonData.sprites.front_default);
//       setPokemons(pokemonData)
//     }
//     }
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Pokedex pokemons={pokemons}/>}/>
        <Route path='/pokemon/:name' element={<PokemonDetail />}/>
      </Routes>
    </div>
  );
};



export default App;
  