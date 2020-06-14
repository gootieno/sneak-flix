import React, { Component } from 'react';
import logo from '../images/Sneakflix.png';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}
	render() {
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
							LOGIN
						</button>
					</form>
				</div>
			</div>
		);
	}
}
