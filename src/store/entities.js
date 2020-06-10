import { combineReducers } from 'redux';
import { moviesReducer } from './reducers/movies';
import { tvShowReducer } from './reducers/tvShows';
export default combineReducers({
	movies: moviesReducer,
	shows: tvShowReducer,
});
