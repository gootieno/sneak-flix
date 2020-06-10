//Action Creator
export const showAdded = (show) => {
	return { type: 'RECEIVE_SHOW', show };
};

//Reducer
export const tvShowReducer = (state = {}, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'RECEIVE_SHOW':
			return Object.assign(newState, {
				[action.show.id]: action.show,
			});
		default:
			return state;
	}
};

//selector functions
export const getActionShows = (state) => {
	let shows = Object.values(state.entities.shows).filter(
		(show) => show.genre === 'action'
	);
	return shows;
};

export const getComedyShows = (state) => {
	let shows = Object.values(state.entities.shows).filter(
		(show) => show.genre === 'comedy'
	);
	return shows;
};

export const getDramaShows = (state) => {
	let shows = Object.values(state.entities.shows).filter(
		(show) => show.genre === 'drama'
	);
	return shows;
};
