import { receiveMovies } from '../store/reducers/movies';

export const fetchMovies = () => async (dispatch) => {
	const response = await fetch(`http://localhost:8080/movies`);
	if (!response.ok) throw response;
	const { movies } = await response.json();
	dispatch(receiveMovies(movies));
};


