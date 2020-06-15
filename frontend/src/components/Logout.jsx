import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../store/reducers/auth';

const Logout = (props) =>
	props.loggedOut ? (
		<Redirect to='/' />
	) : (
		<button id='logout' onClick={props.logout}>
			Logout
		</button>
	);
const mapStateToProps = (state) => {
	return {
		loggedOut: !state.auth.token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
