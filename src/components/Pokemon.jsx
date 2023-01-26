import React from "react";

const Pokemon = ({ pokemons }) => {
  // console.log("pokemon.jsx", pokemons);
  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemons.sprites.front_default}
          alt={pokemons.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemons.name}</h3>
          <div>#{pokemons.id}</div>
        </div>
      </div>
      {/* </Link> */}

      <div></div>
    </div>
  );
};

export default Pokemon;
