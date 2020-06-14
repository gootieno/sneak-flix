import { combineReducers } from 'redux';
import { moviesReducer } from './reducers/movies';
import { tvShowReducer } from './reducers/tvShows';
import { authReducer } from './reducers/auth';
export default combineReducers({
	movies: moviesReducer,
	shows: tvShowReducer,
	auth: authReducer,
});
