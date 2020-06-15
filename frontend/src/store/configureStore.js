// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer';
// import { login } from './reducers/auth';

// export default function () {
// 	return configureStore({ reducer, middleware: [login] });
// }

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './reducers/movies';
import { tvShowReducer } from './reducers/tvShows';
import { authReducer } from './reducers/auth';

const reducers = combineReducers({
	movies: moviesReducer,
	shows: tvShowReducer,
	auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = {}) => {
	return createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
};
export default configureStore;
