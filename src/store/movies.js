import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const slice = createSlice({
	name: 'movies',
	initialState: {
		movies: [],
	},

	reducers: {
		movieAdded: (state, action) => {
			state.movies.push({
				id: action.payload.id,
				image: action.payload.image,
				title: action.payload.title,
				description: action.payload.description,
			});
		},
	},
});

export default slice.reducer;

export const { movieAdded } = slice.actions;
