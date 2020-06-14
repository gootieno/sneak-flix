import React, { Component } from 'react';

import logo from '../images/Sneakflix.png';
export default class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
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
						onChange={this.onChange}
						value={this.state.email}
						placeholder='example@email.com'
					/>
					<input
						type='password'
						onChange={this.onChange}
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
