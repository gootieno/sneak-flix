import { combineReducers } from 'redux';
import { moviesReducer } from './reducers/movies';

export default combineReducers({
	movies: moviesReducer,
});
