import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.css';
import Browse from './components/Browse';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const store = configureStore();

const Root = (props) => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={App} />
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/browse'
						component={Browse}
					/>
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/movies'
						component={Movies}
					/>
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/tv-shows'
						component={TvShows}
					/>
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

const mapStateToProps = (state) => {
	return {
		token: state.entities.auth.token,
	};
};

export default connect(mapStateToProps)(Root);
