import React, { Component } from 'react';
import logo from '../images/Sneakflix.png';
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
					<span>
						<img src={logo} alt='logo' />
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
						<form className='body-container__signup-form'>
							<input type='email' placeholder='example@email.com' />
						</form>
						<a href='/sign-up'>
							<button className='body-container__try-it-now'>TRY IT NOW</button>
						</a>
					</div>
					<p>Ready to watch? Enter email address to sign up!</p>
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
		);
	}
}
