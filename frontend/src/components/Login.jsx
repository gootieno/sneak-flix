import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from '../images/Sneakflix.png';
import { connect } from 'react-redux';
import { login } from '../store/reducers/auth';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	//Throw errors here
	async handleSubmit(e) {
		e.preventDefault();
		this.props.login(this.state.email, this.state.password);
	}

	updateEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	updatePassword = (e) => {
		this.setState({ password: e.target.value });
	};

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
				<div className='login-card'>
					<h2 id='sign-in'>Welcome Back!</h2>
					<form className='body-container__login-form'>
						<p>We missed you!</p>
						<input
							type='email'
							onChange={this.updateEmail}
							value={this.state.email}
							placeholder='example@email.com'
						/>
						<input
							type='password'
							onChange={this.updatePassword}
							value={this.state.password}
							placeholder='password'
						/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
