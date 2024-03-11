import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieCard } from './components/Moviecard/MovieCard';
import { Header } from './components/Header';

function App() {

	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	const getMovieintheaters = async () => {
		try {
			const { data } = await axios.get("http://127.0.0.1:5500/json/data.json");
			setMovies(data.moviesintheaters);
		} catch (err) {
			console.log(err);
		}
	}

	const getMoviescoming = async () => {
		try {
			const { data } = await axios.get("http://127.0.0.1:5500/json/data.json");
			setMovies(data.moviescoming);
		} catch (err) {
			console.log(err);
		}
	}

	const getMoviestopratedindia = async () => {
		try {
			const { data } = await axios.get("http://127.0.0.1:5500/json/data.json");
			setMovies(data.topratedindia);
		} catch (err) {
			console.log(err);
		}
	}

	const getMoviestopratedmovies = async () => {
		try {
			const { data } = await axios.get("http://127.0.0.1:5500/json/data.json");
			setMovies(data.topratedmovies);
		} catch (err) {
			console.log(err);
		}
	}

	const getfavouritemovies = async () => {
		try {
			const { data } = await axios.get("http://127.0.0.1:5500/json/data.json");
			setMovies(data.favourite);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		getMoviestopratedmovies();
	}, []);

	const handleonSubmit = (e) => {
		e.preventDefault();
	}

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value.toUpperCase());
	};

		return (
			<>
				<Header getMoviestopratedmovies={getMoviestopratedmovies} getMovieintheaters={getMovieintheaters} getMoviescoming={getMoviescoming} getMoviestopratedindia={getMoviestopratedindia} getfavouritemovies={getfavouritemovies} ></Header>
				<div className='searchbar'>
					<form onSubmit={handleonSubmit}>
						<input
							className='search'
							type='search'
							placeholder='Search....'
							value={searchTerm}
							onChange={handleOnChange}
						/>
					</form>
				</div>
				<div className="App">
					<h1 className='heading-1'> Movies </h1>
					<main className='main'>
						{movies && movies.length > 0 && movies.filter((movie) => {
							return searchTerm.toLocaleUpperCase() === '' ? movie : movie.title.toUpperCase().includes(searchTerm);
						}).map(movie => <MovieCard key={movie.id} movie={movie} />)}
					</main>
				</div>
			</>
		);
	}

export default App;