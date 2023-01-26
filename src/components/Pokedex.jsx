import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

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
        {/* <Pokemon pokemons={pokemons} key={pokemons.name} />; */}
        {pokemons.map((pokemons, idx) => {
          return <Pokemon pokemons={pokemons} key={pokemons.name} />;
        })}
        <button onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
};

export default Pokedex;
