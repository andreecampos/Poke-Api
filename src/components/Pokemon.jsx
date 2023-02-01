import React from 'react';

const Pokemon = ({ pokemons, type }) => {
	const pokeType = pokemons.types[0].type.name;
	const style = `card-body ${type}`;
	return (
		<div className='thumb-container'>
			<img
				src={pokemons.sprites.other.dream_world.front_default}
				alt={pokemons.name}
				className='pokemon-img'
			/>
			<div className='card-circle'></div>
			<div className={style}>
				<div className='card-top'>
					<h5>#{pokemons.id}</h5>
					<h2 className='card-title'>{pokemons.name}</h2>
					<small>Type: {pokeType}</small>
				</div>
			</div>
		</div>
	);
};

export default Pokemon;
