import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import Browse from './components/Browse';

import LandingPage from './components/LandingPage';

import { loadToken } from './store/reducers/auth';
import ProtectedRoute from './components/ProtectedRoute';



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
					<Route exact path='/' component={LandingPage} />
					<ProtectedRoute
						isLoggedIn={this.props.token}
						path='/browse'
						component={Browse}
					/>
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
