import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetail = ({ match }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //   console.log("detail", selectedPokemon.sprites.front_default);
  const { name } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setSelectedPokemon(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [name]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!selectedPokemon) {
    return <p>Error</p>;
  }
  return (
    <div>
      <h1>PokemonDetail</h1>
      {/* <img src={selectedPokemon.sprites.front_default} alt="" /> */}
      {isLoading ? (
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
      )}
      {/* <h2>{selectedPokemon.name}</h2>
      <p>Weight: {selectedPokemon.weight}</p>
      <p>Height: {selectedPokemon.height}</p> */}
    </div>
  );
};

export default PokemonDetail;
