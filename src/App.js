import React, { useState, useEffect } from 'react';
import PokemonDetail from './Pages/PokemonDetail';
import Pokedex from './Pages/Pokedex';
import Loading from './components/Loading';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { getGeneration1Pokemon, fetchAllPokemonData } from './components/Api';

function App() {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [offset, setOffset] = useState(0);

	const handleLoadLess = () => {
		if (offset - 10 >= 0) {
			setOffset(offset - 10);
		}
	};

	const handleLoadMore = async () => {
		try {
			setLoading(true);
			const nextPokemons = await getGeneration1Pokemon(offset + 10, 10);
			const { results } = nextPokemons;
			const allPokemons = await fetchAllPokemonData(results);
			setOffset(offset + 10);
			setPokemons([...pokemons, ...allPokemons]);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const generation1Pokemon = await getGeneration1Pokemon(0, 10);
				const { results } = generation1Pokemon;
				const allPokemons = await fetchAllPokemonData(results);
				setPokemons(allPokemons);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return loading ? (
		<Loading />
	) : (
		<div>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<Pokedex
							pokemons={pokemons}
							handleLoadMore={handleLoadMore}
							offset={offset}
							handleLoadLess={handleLoadLess}
						/>
					}
				/>
				<Route path='/pokemon/:name' element={<PokemonDetail />} />
			</Routes>
		</div>
	);
}

export default App;
