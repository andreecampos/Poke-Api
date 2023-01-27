import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetail = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  console.log("details", selectedPokemon);
  // const [isLoading, setIsLoading] = useState(false);

  const { name } = useParams();

  const loadDetail = async () => {
    // setIsLoading(true);
    // axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    //   .then((res) => {
    //     setSelectedPokemon(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => console.log(err));
    // setIsLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      // console.log("data", data);
      // const singelPokemon = [];
      // singelPokemon.push(data);
      setSelectedPokemon(data);
      // setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadDetail();
  }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (!selectedPokemon) {
  //   return <p>Error</p>;
  // }
  return (
    <div>
      <h1>PokemonDetail</h1>
      <h2>{selectedPokemon.name}</h2>
      {selectedPokemon.sprites && (
        <img src={selectedPokemon.sprites.front_default} alt="" />
      )}
      {/* {isLoading ? (
        <h1>loading</h1>
      ) : (
        selectedPokemon.map((item) => {
          return (
            <>
              <h1>{item.name}</h1>
              <img src={item.sprites.front_default} alt="" />
            </>
          );
        })
      )} */}

      <p>Weight: {selectedPokemon.weight}</p>
      <p>Height: {selectedPokemon.height}</p>
    </div>
  );
};

export default PokemonDetail;
