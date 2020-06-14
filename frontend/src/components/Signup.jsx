import React, { Component } from 'react';
import logo from '../images/Sneakflix.png';
import { connect } from 'react-redux';
import { actions } from '../store/reducers/auth';

export class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: '',
		};
	}

	onChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	onSubmit = (e) => {
		e.preventDefault();
	};
	render() {
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
						onChange={this.props.updateEmail}
						placeholder='example@email.com'
					/>
					<input
						type='password'
						onChange={this.props.updatePassword}
						value={this.props.password}
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
		email: state.entities.auth.email,
		password: state.entities.auth.password,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateEmail: (event) => dispatch(actions.updateEmail(event.target.value)),
		updatePassword: (event) =>
			dispatch(actions.updatePassword(event.target.value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
