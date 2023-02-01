import React from 'react';
import Pokemon from '../components/Pokemon';
import { Link } from 'react-router-dom';

const Pokedex = ({ pokemons, handleLoadMore, offset, handleLoadLess }) => {
	const totalPokemons = 150;
	const pokemonCards = pokemons
		.slice(offset, offset + 10)
		.map((pokemons, index) => {
			return (
				<Link to={`/pokemon/${pokemons.name}`} key={index}>
					<Pokemon
						pokemons={pokemons}
						key={pokemons.name}
						type={pokemons.types[0].type.name}
					/>
				</Link>
			);
		});

	return (
		<div>
			<h1 className='main-title'>Pokemons of the first generation</h1>
			<div className='pokedex-grid'>
				<div className='pokemon-card'>{pokemonCards}</div>
			</div>
			<div className='footer'>
				{offset + 10 < totalPokemons && (
					<button onClick={handleLoadMore} className='Load-More'>
						Cargar más
					</button>
				)}
				{offset !== 0 && (
					<button onClick={handleLoadLess} className='Load-Less'>
						Load Less
					</button>
				)}
			</div>
		</div>
	);
};

export default Pokedex;
