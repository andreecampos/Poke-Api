import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";

const Pokedex = ({ pokemons }) => {
  const [start, setStart] = useState(0);

  function handleLoadMore() {
    setStart(start + 10);
  }

  useEffect(() => {}, [start]);
  return (
    <div>
      <div className="pokedex-grid">
        <h1>Pokemon av första generation</h1>

        {pokemons.map((pokemons, idx) => {
          return (
            <Link to={`/pokemon/${pokemons.name}`}>
              <Pokemon pokemons={pokemons} key={pokemons.name} />;
            </Link>
          );
        })}
        <button onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
};

export default Pokedex;
