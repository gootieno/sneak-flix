const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const TOKEN_KEY = 'authentication/token';
const SET_TOKEN = 'SNEAK_FLIX/SET_TOKEN';

const updatePassword = (value) => ({
	type: UPDATE_PASSWORD,
	value,
});

const updateEmail = (value) => ({
	type: UPDATE_EMAIL,
	value,
});

export const setToken = (token) => ({ type: SET_TOKEN, token });

export const actions = {
	updateEmail,
	updatePassword,
};

export const loadToken = () => async (dispatch) => {
	const token = window.localStorage.getItem(TOKEN_KEY);
	if (token) {
		dispatch(setToken(token));
	}
};

export const login = (email, password) => async (dispatch) => {
	debugger;
	console.log('email and pw ', email, password);
	const response = await fetch('http://localhost:8080/user/login', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (response.ok) {
		const { token } = await response.json();
		console.log(token);
		window.localStorage.setItem(TOKEN_KEY, token);
		dispatch(setToken(token));
	}
};

const initialState = {
	token: '',
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_EMAIL: {
			return {
				...state,
				email: action.value,
			};
		}
		case UPDATE_PASSWORD: {
			return {
				...state,
				password: action.value,
			};
		}
		default: {
			return state;
		}
	}
};
