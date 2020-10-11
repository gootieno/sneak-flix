import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import Browse from './components/Browse';
import Movies from './components/Movies';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import { loadToken } from './store/reducers/auth';
import ProtectedRoute from './components/ProtectedRoute';
import Demo from './components/Demo';
import LandingPageHooks from './components/LandingPageHooks';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	async componentDidMount() {
		this.setState({ loaded: true });
		this.props.tokenLoad();
	}

	render() {
		if (!this.state.loaded) {
			return null;
		}
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={LandingPageHooks} />
					<ProtectedRoute
						isLoggedIn={this.props.token}
						path='/browse'
						component={Browse}
					/>
					<ProtectedRoute
						isLoggedIn={this.props.token}
						path='/movies'
						component={Movies}
					/>
					<Route path='/sign-up' component={Signup} />
					<Route path='/demo' component={Demo} />
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.auth.token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		tokenLoad: () => dispatch(loadToken()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
