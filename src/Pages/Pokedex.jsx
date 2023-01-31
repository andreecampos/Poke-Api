import React, { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import { Link } from "react-router-dom";

const Pokedex = ({ pokemons, handleLoadMore, offset, handleLoadLess }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>Pokemon av första generation</h1>
      <div className="pokedex-grid">
        <div className="pokemon-card">
          {pokemons.slice(offset, offset + 10).map((pokemons, idx) => {
            return (
              <Link to={`/pokemon/${pokemons.name}`} key={idx}>
                <Pokemon
                  pokemons={pokemons}
                  key={pokemons.name}
                  type={pokemons.types[0].type.name}
                  // type={pokemons.types[0].type.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <button onClick={handleLoadMore} className="Load-More">
          Load More
        </button>

        {offset !== 0 && (
          <button onClick={handleLoadLess} className="Load-Less">
            Load Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
