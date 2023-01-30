import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cache from "axios-cache-adapter";

const cache = Cache.setupCache({
  maxAge: 15 * 60 * 1000, // 15 min cache
});
const api = axios.create({
  adapter: cache.adapter,
});

const PokemonDetail = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const { name } = useParams();
  const type = selectedPokemon.types && selectedPokemon.types[0].type.name;
  const style = `card-body-detail ${type}`;

  const loadDetail = async () => {
    try {
      const res = await api.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      // const data = await res.json();
      const data = res.data;

      setSelectedPokemon(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadDetail();
  }, []);

  return (
    <div className="pokedex-grid-detail">
      <div className="thumb-container-detail">
        {selectedPokemon.sprites && (
          <img
            src={selectedPokemon.sprites.other.dream_world.front_default}
            alt=""
            className="pokemon-img-detail"
          />
        )}
      </div>
      <div className={style}>
        <h5>#{selectedPokemon.id}</h5>
        <h2 className="card-title-detail">{selectedPokemon.name}</h2>
        <p>Weight: {selectedPokemon.weight}</p>
        <p>Height: {selectedPokemon.height}</p>
        <p>
          Type: {selectedPokemon.types && selectedPokemon.types[0].type.name}
        </p>
      </div>
    </div>
  );
};

export default PokemonDetail;
