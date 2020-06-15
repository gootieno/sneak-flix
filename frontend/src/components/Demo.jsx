import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../images/Sneakflix.png';
import { connect } from 'react-redux';
import { login } from '../store/reducers/auth';

export class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			demouser: 'demo@example.com',
			password: 'Demouser1234!',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(e) {
		e.preventDefault();
		this.props.login(this.state.demouser, this.state.password);
	}

	render() {
		if (this.props.token) {
			return <Redirect to='/browse' />;
		}
		return (
			<div>
				<header>
					<span className='logo'>
						<a href='/'>
							<img src={logo} alt='logo' />
						</a>
					</span>
				</header>
				<div id='login-card' className='login-card'>
					<h2 id='sign-in'>Try a demo! Click Login!</h2>
					<form className='body-container__login-form'>
						<input type='email' defaultValue={this.state.demouser} />
						<input type='password' defaultValue={this.state.password} />
						<button
							id='demo-button'
							onClick={this.handleSubmit}
							className='body-container__sign-up'
						>
							LOGIN
						</button>
					</form>
				</div>
			</div>
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
		login: (email, password) => dispatch(login(email, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
