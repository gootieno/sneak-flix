//Action creators
export const movieAdded = (movie) => {
	return { type: 'RECEIVE_MOVIE', movie };
};

//Reducer
export const moviesReducer = (state = {}, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'RECEIVE_MOVIE':
			return Object.assign(newState, {
				[action.movie.id]: action.movie,
			});
		default:
			return state;
	}
};

//selector functions
export const getActionMovies = (state) => {
	let movies = Object.values(state.entities.movies).filter(
		(m) => m.genre === 'action'
	);
	return movies;
	// if (state.entities.movies.genre === 'action') return state.entities.movies;
};

export const getComedyMovies = (state) => {
	// if (state.entities.movies.genre === 'comedy') return state.entities.movies;
	let movies = Object.values(state.entities.movies).filter(
		(m) => m.genre === 'comedy'
	);
	return movies;
};

export const getDramaMovies = (state) => {
	if (state.entities.movies.genre === 'drama') return state.entities.movies;
};
