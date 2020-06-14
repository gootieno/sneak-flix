import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { login } from './reducers/auth';

export default function () {
	return configureStore({ reducer, middleware: [login] });
}
