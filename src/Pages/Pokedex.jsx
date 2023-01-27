import React, { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import { Link } from "react-router-dom";

const Pokedex = ({ pokemons }) => {
  const [start, setStart] = useState(0);

  function handleLoadMore() {
    setStart(start + 10);
  }

  useEffect(() => {}, [start]);
  return (
    <div>
      <h1>Pokemon av första generation</h1>
      <div className="pokedex-grid">
        <div className="pokemon-card">
          {pokemons.slice(start, start + 20).map((pokemons, idx) => {
            return (
              <Link to={`/pokemon/${pokemons.name}`}>
                <Pokemon
                  pokemons={pokemons}
                  key={pokemons.name}
                  type={pokemons.types[0].type.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default Pokedex;
