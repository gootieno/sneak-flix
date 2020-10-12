import React from 'react';
import {
	TextField,
	Dialog,
	DialogTitle,
	Button,
	DialogContent,
	DialogActions,
} from '@material-ui/core';

function LoginModal(props) {
	return (
		<div>
			<Dialog
				onClose={props.handleClose}
				aria-labelledby='login-dialog-title'
				open={props.open}
				fullWidth
				maxWidth='sm'
			>
				<DialogTitle id='login-dialog-title'>Welcome Back!</DialogTitle>
				<form onSubmit={props.submitLogin}>
					<DialogContent>
						<TextField
							name='email'
							type='email'
							placeholder='email'
							value={props.email}
							onChange={props.handleLogin}
						/>
						<TextField
							name='password'
							type='password'
							placeholder='password'
							value={props.password}
							onChange={props.handleLogin}
						/>
						<DialogActions>
							<Button onClick={props.submitLogin}>Login</Button>
						</DialogActions>
					</DialogContent>
				</form>
			</Dialog>
		</div>
	);
}

export default LoginModal;
