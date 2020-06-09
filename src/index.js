import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import { fetchMovies } from './utils/apiUtil';
import 'font-awesome/css/font-awesome.css';
import Browse from './components/Browse';
import Movies from './components/Movies';
import TvShows from './components/TvShows';

// window.fetchMovies = fetchMovies;
// //gets a movie by search term
// fetchMovies('inception')
// 	.then((res) => res.json())
// 	.then((res) => console.log(res.results[0]));

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
