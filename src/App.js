import React, { useState, useEffect } from "react";
import PokemonDetail from './PokemonDetail';
import Pokedex from './components/Pokedex'
import { Route,Routes} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";


function App() {
const [pokemons, setPokemons] = useState([])
    // console.log("pokemons",pokemons)


// const fetchPokemons =async ()=>{
//   try{
//     const res = await axios.get("https://pokeapi.co/api/v2/generation/1/");
//     const data = await res.data.pokemon_species
//    const PokeNameUrl = await data.map((item)=>(item) )
//     setPokemons(PokeNameUrl)

//    const createPokemonObject= async (result) =>{
//     result.map(async(item)=>{
//       // console.log("url", item.url)
//       const result = await axios.get(item.url)
//       // console.log("varieteis",result.data.varieties)
//       const varieties = result.data.varieties

//       const PokemonVarieties = async(varieteis)=>{
//         varieteis.map(async(item)=>{
//           // console.log("varieties", item.pokemon)
//           const result = await axios.get(item.pokemon.url)
//         // console.log("resultado", result.data)
//           // setPokemons(currentLis=>[...currentLis, result])
//           // pokemons.push(data)
//         })
//       }
//       PokemonVarieties(varieties)
//     })
//   }
//   createPokemonObject(PokeNameUrl)

//   }catch(err){}

// }

    async function getGeneration1Pokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150?generation=1');
      const generation1Pokemon = await response.json();
      console.log(generation1Pokemon)
      const allPokemons = []
      for (const pokemon of generation1Pokemon.results) {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
          // console.log(pokemonData.name, pokemonData.sprites.front_default);
          allPokemons.push(pokemonData)
      }
      setPokemons(allPokemons)
    }
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
        
        
        useEffect(()=>{
  getGeneration1Pokemon()
  // fetchPokemons()
},[])
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<PokemonList/>}/> */}
        <Route path='/pokedex' element={<Pokedex pokemons={pokemons}/>}/>
        <Route path='/pokemon/:name' element={<PokemonDetail />}/>
      </Routes>
    </div>
  );
};



export default App;
  