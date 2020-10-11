import React from 'react';
import {
	TextField,
	Dialog,
	DialogTitle,
	Button,
	DialogContent,
	DialogActions,
} from '@material-ui/core';

function SignupModal(props) {
	return (
		<div>
			<Dialog
				onClose={props.handleClose}
				aria-labelledby='login-dialog-title'
				open={props.open}
				fullWidth
				maxWidth='sm'
			>
				<DialogTitle id='login-dialog-title'>
					Want an account? Sure!
				</DialogTitle>
				<form>
					<DialogContent>
						<TextField
							name='email'
							type='email'
							placeholder='email'
							value={props.email}
							onChange={props.handleEmail}
						/>
						<TextField
							name='password'
							type='password'
							placeholder='password'
							value={props.password}
							onChange={props.handlePassword}
						/>
						<DialogActions>
							<Button onClick={props.submitSignUp}>SignUP</Button>
						</DialogActions>
					</DialogContent>
				</form>
			</Dialog>
		</div>
	);
}

export default SignupModal;
