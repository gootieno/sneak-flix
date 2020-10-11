import React, {useState} from 'react';
import logo from '../images/Sneakflix.png';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Button} from '@material-ui/core';

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
	loginButton: {
		transitionDuration: '0.4s',
		border: '2px solid red',
		borderRadius: '5px',
		fontSize: '14px',
		marginRight: '5px',
		padding: '10px 25px',
		color: 'red',
		fontWeight: 'bold',
		backgroundColor: 'rgb(20, 20, 20)',
	},
	buttonContainer: {
		marginTop: '5px',
		objectFit: 'cover',
	},
});

function LandingPageHooks() {
	const [loginInfo, setLoginInfo] = useState({email: '', password: ''});
	const [openLogin, setOpenLogin] = useState(false);

	const handleLoginInfo = (e) => {
		e.target.id = 'email'
			? setLoginInfo({...loginInfo, email: e.target.value})
			: setLoginInfo({...loginInfo, password: e.target.value});
	};

	const handleModal = (e) => {
		openLogin ? setOpenLogin(false) : setOpenLogin(true);
	};

	const handleSubmit = (e) => {};

	const classes = useStyles();

	return (
		<div>
			<AppBar className={classes.landingPageNav} position='static'>
				<a href='/'>
					<img src={logo} alt='logo' />
				</a>
				<div className={classes.buttonContainer}>
					<Button className={classes.loginButton}>Login</Button>
					<Button className={classes.loginButton}>SignUp</Button>
				</div>
			</AppBar>
			<section>
				<div className='body-container'>
					<h1 className='body-container__title'>Take a sneak peak of movies</h1>
					<h5 className='body-container__signup-message'>
						Watch anytime. No subscription needed
					</h5>
					<div className='form-container'>
						<a href='/sign-up'>
							<button className='body-container__try-it-now'>TRY IT NOW</button>
						</a>
					</div>
					<p>Want to sign up? Click Try it now!</p>
				</div>
			</section>
		</div>
	);
}

export default LandingPageHooks;
