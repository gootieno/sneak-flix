import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.css';
import Browse from './components/Browse';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import Login from './components/Login';

const store = configureStore();

const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={App} />
					<Route path='/browse' component={Browse} />
					<Route path='/movies' component={Movies} />
					<Route path='/tv-shows' component={TvShows} />
					<Route path='/sign-up' component={Signup} />
					<Route path='/login' component={Login} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById('root')
);
