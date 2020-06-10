import { apiKey } from '../config';

export const fetchMovies = (searchTerm) => {
	return fetch(
		`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${searchTerm}`
	);
};
