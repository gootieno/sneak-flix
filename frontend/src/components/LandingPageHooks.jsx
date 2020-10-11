import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../store/reducers/auth';
import logo from '../images/Sneakflix.png';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button } from '@material-ui/core';
import LoginModal from './modals/LoginModal';

const useStyles = makeStyles({
	landingPageNav: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '0px 20px',
		boxShadow: 'none',
		background:
			'linear-gradient(to right,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 14%, rgba(61, 59, 61, 1) 50%, rgba(0, 0, 0, 1) 86%, rgba(0, 0, 0, 1) 100%)',
	},
	buttonContainer: {
		marginTop: '10px',
		objectFit: 'cover',
	},
	loginButton: {
		transitionDuration: '0.4s',
		border: '2px solid red',
		borderRadius: '5px',
		fontSize: '14px',
		marginRight: '10px',
		padding: '10px 25px',
		color: 'red',
		fontWeight: 'bold',
		backgroundColor: 'rgb(20, 20, 20)',
		'&:hover': {
			background: 'rgb(140, 0, 0)',
			color: 'black',
			borderColor: 'black',
		},
	},
	demoButton: {
		border: '2px solid red',
		padding: '15px 35px',
		borderRadius: '5px',
		fontSize: '18px',
		transitionDuration: '0.4s',
		fontWeight: 'bold',
		color: 'black',
		background:
			'linear-gradient(to right, rgb(29, 29, 29) 0%, rgb(41, 41, 41) 14%, rgba(61, 59, 61, 1) 50%, rgb(41, 41, 41) 86%, rgb(29, 29, 29) 100%)',
		'&:hover': {
			background: 'rgb(140, 0, 0)',
			borderColor: 'black',
		},
	},
});

function LandingPageHooks() {
	const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
	const [openLogin, setOpenLogin] = useState(false);

	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);

	const handleEmail = (e) => {
		setLoginInfo({ ...loginInfo, email: e.target.value });
	};

	const handlePassword = (e) => {
		setLoginInfo({ ...loginInfo, password: e.target.value });
	};

	const handleModal = () => {
		setOpenLogin(!openLogin);
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		const email = loginInfo.email;
		const password = loginInfo.password;
		dispatch(login(email, password));
	};

	const classes = useStyles();

	if (token) return <Redirect to='/browse' />;
	return (
		<div>
			<AppBar className={classes.landingPageNav} position='static'>
				<a href='/'>
					<img src={logo} alt='logo' />
				</a>
				<div className={classes.buttonContainer}>
					<Button
						onClick={() => setOpenLogin(true)}
						className={classes.loginButton}
					>
						Login
					</Button>
					<Button className={classes.loginButton}>SignUp</Button>
				</div>
			</AppBar>
			<section>
				<div className='body-container'>
					<h1 className='body-container__title'>Take a sneak peak of movies</h1>
					<h5 className='body-container__signup-message'>
						Watch anytime. No subscription needed
					</h5>
					<p>Try a demo!</p>
					<div className='form-container'>
						<Button className={classes.demoButton}>TRY IT NOW</Button>
					</div>
				</div>
			</section>
			<footer className='footer-container'>
				<h2 className='footer-container_faq'>Frequently Asked Questions</h2>
				<a href='https://github.com/gootieno' className='footer-link-git'>
					Where can I see more of this developers work?
				</a>
				<a
					href='https://www.linkedin.com/in/geoffrey-otieno-57015966/'
					className='footer-link-linkedIn'
				>
					Can I contant the developer on LinkedIn?
				</a>
			</footer>
			<LoginModal
				handleClose={handleModal}
				open={openLogin}
				handleEmail={handleEmail}
				handlePassword={handlePassword}
				email={loginInfo.email}
				password={loginInfo.password}
				submitLogin={handleLoginSubmit}
			/>
		</div>
	);
}

export default LandingPageHooks;
