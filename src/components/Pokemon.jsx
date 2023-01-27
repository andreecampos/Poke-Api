import React from "react";

const Pokemon = ({ pokemons, type }) => {
  console.log("pokemon.jsx", pokemons);
  const style = `thumb-container ${type}`;
  return (
    <div className={style}>
      <div className="pokemon-img-container">
        <img
          src={pokemons.sprites.other.dream_world.front_default}
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
