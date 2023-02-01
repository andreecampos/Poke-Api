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
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const loadDetail = async () => {
      try {
        const res = await api.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = res.data;

        setSelectedPokemon(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadDetail();
  }, [name]);
  const { id, weight, height, sprites, types } = selectedPokemon;
  const type = types?.[0]?.type?.name;

  return (
    <div className="pokedex-grid-detail">
      <div className="thumb-container-detail">
        {sprites && (
          <img
            src={sprites.other.dream_world.front_default}
            alt=""
            className="pokemon-img-detail"
          />
        )}
      </div>
      <div className={`card-body-detail ${type}`}>
        <h5>#{id}</h5>
        <h2 className="card-title-detail">{selectedPokemon.name}</h2>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
        <p>Type: {type}</p>
      </div>
    </div>
  );
};

export default PokemonDetail;
