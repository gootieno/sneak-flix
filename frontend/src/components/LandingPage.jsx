import React, { Component } from 'react';
import logo from '../images/Sneakflix.png';
import EmailContext from './EmailContext';
// import Signup from './Signup';
//only data needed is email address for try it now
// should render the landingpageheader, landingpagebody, landingpagebottom

// class EmailForm extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			email: '',
// 		};
// 	}
// 	onChange = (e) => {
// 		this.setState({ email: e.target.value });
// 	};

// 	render() {
// 		return (
// 			<form className='body-container__signup-form'>
// 				<input
// 					onChange={this.onChange}
// 					type='email'
// 					value={this.props.email}
// 					placeholder='example@email.com'
// 				/>
// 			</form>
// 		);
// 	}
// }

export default class LandingPage extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
		};
	}

	onChange = (e) => {
		this.setState({ email: e.target.value });
	};

	handleSubmit = (e) => {
		// e.preventDefault();
		this.context.router.push({
			pathname: '/sign-up',
			state: { email: this.state.email },
		});
		console.log(this.state);
	};

	render() {
		return (
			<EmailContext.Provider value={this.state}>
				<div>
					<header className='header-container'>
						<span>
							<a href='/'>
								<img src={logo} alt='logo' />
							</a>
						</span>
						<div>
							<a href='/'>
								<button className='header-container__demo'>Demo</button>
							</a>
							<a href='/login'>
								<button className='header-container__login'>Login</button>
							</a>
						</div>
					</header>
					<div className='body-container'>
						<h1 className='body-container__title'>
							A sneak peak of upcoming movies
						</h1>
						<h5 className='body-container__signup-message'>
							Watch anytime. No subscription needed
						</h5>
						<div className='form-container'>
							{/* <form className='body-container__signup-form'>
								<input
									type='email'
									onChange={this.onChange}
									value={this.state.email}
									placeholder='example@email.com'
								/>
							</form> */}
							<a href='/sign-up'>
								<button
									onClick={this.handleSubmit}
									className='body-container__try-it-now'
								>
									TRY IT NOW
								</button>
							</a>
						</div>
						<p>Want to sign up? Click Try it now!</p>
					</div>
					<footer className='footer-container'>
						<h2 className='footer-container_faq'>Frequently Asked Questions</h2>
						<a href='https://github.com/gootieno' className='footer-link-git'>
							Where can I see more of this developers work?
						</a>
						<a
							href='https://www.linkedin.com/in/geoffrey-otieno-57015966/'
							className='footer-link-linkedIn'
						>
							Can I contant the developer in LinkedIn?
						</a>
					</footer>
				</div>
			</EmailContext.Provider>
		);
	}
}
