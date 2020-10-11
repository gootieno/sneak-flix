import React from 'react';
import {TextField, Dialog, DialogTitle, Button} from '@material-ui/core';

function LoginModal(props) {
	return (
		<div>
			<Dialog
				onClose={handleClose}
				aria-labelledby='simple-dialog-title'
				open={openLogin}
			>
				<DialogTitle id='simple-dialog-title'>Welcome Back!</DialogTitle>
				<form>
					<TextField
						id='email'
						label='standard'
						value={props.handleLoginInfo}
					/>
					<TextField
						id='password'
						label='standard'
						value={props.handleLoginInfo}
					/>
                    <Button onClick={props.handleSubmit}>Login</Button>
				</form>
			</Dialog>
		</div>
	);
}

export default LoginModal;
