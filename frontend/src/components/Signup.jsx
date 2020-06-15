import React, { Component } from 'react';
import logo from '../images/Sneakflix.png';
import { connect } from 'react-redux';
import { actions } from '../store/reducers/auth';
import { signup } from '../store/reducers/auth';

export class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	updateEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	updatePassword = (e) => {
		this.setState({ password: e.target.value });
	};

	async handleSubmit(e) {
		e.preventDefault();
		this.props.signup(this.state.email, this.state.password);
	}
	render() {
		console.log(this.state);
		return (
			// <EmailContent.Consumer>

			<div>
				<header>
					<span>
						<a href='/'>
							<img src={logo} alt='logo' />
						</a>
					</span>
				</header>
				<form className='body-container__signup-form'>
					<h4 id='sign-up'>Enter an email and password for your account!</h4>
					<p>This is the only form page! We hate long forms too!</p>
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
						onClick={this.handleSubmit}
						className='body-container__sign-up'
					>
						SIGN UP
					</button>
				</form>
			</div>

			// </EmailContent.Consumer>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		email: state.auth.email,
		password: state.auth.password,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signup: (email, password) => dispatch(signup(email, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
