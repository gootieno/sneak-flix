import React, { Component } from 'react';

//only data needed is email address for try it now
// should render the landingpageheader, landingpagebody, landingpagebottom

// export function LandingPage() {
// 	return <div></div>;
// }

export default class LandingPage extends Component {
	render() {
		return (
			<div>
				<header className='header-container'>
					<p className='header-container__logo'>logo goes here</p>
					<button className='header-container__signin'>Sign In</button>
				</header>
				<body className='body-container'>
					<h1 className='body-container__title'>
						A sneak peak of upcoming movies
					</h1>
					<h5 className='body-container__signup-message'>
						Watch anytime. No subscription needed
					</h5>
					<form className='body-container__signup-form'>
						<input type='text'></input>
						<button className='body-container__try-it-now'>TRY IT NOW ></button>
						<p>Ready to watch? Enter email address to sign up!</p>
					</form>
				</body>
				<footer className='footer-container'>
					<h2 className='footer-container_faq'>Frequently Asked Questions</h2>
					<button className='footer-container__buttons'>
						Drop down button 1
					</button>
					<button className='footer-container__buttons'>
						Drop down button 2
					</button>
					<button className='footer-container__buttons'>
						Drop down button 3
					</button>
					<button className='footer-container__buttons'>TRY THE DEMO!</button>
				</footer>
			</div>
		);
	}
}
