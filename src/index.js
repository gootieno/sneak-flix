import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.css';
import Browse from './components/Browse';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import configureStore from './store/configureStore';
import {
	getComedyMovies,
	getActionMovies,
	movieAdded,
} from './store/reducers/movies';

import {
	showAdded,
	getActionShows,
	getComedyShows,
} from './store/reducers/tvShows';

const store = configureStore();
store.dispatch(movieAdded({ id: 1, title: 'Inception', genre: 'action' }));
store.dispatch(showAdded({ id: 1, title: 'The Office', genre: 'comedy' }));
console.log(store.getState());

const comedyMovies = getComedyMovies(store.getState());
const comedyShows = getComedyShows(store.getState());
console.log('comedy shows: ', comedyShows);
console.log('comedy movies: ', comedyMovies);

const Root = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/browse' component={Browse} />
				<Route path='/movies' component={Movies} />
				<Route path='/tv-shows' component={TvShows} />
			</Switch>
		</BrowserRouter>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById('root')
);
