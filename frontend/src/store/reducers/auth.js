const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const TOKEN_KEY = 'authentication/TOKEN';
const SET_TOKEN = 'SNEAK_FLIX/SET_TOKEN';
const REMOVE_TOKEN = '/authentication/REMOVE_TOKEN';

const updatePassword = (value) => ({
	type: UPDATE_PASSWORD,
	value,
});

const updateEmail = (value) => ({
	type: UPDATE_EMAIL,
	value,
});

export const setToken = (token) => ({ type: SET_TOKEN, token });
export const removeToken = (token) => ({ type: REMOVE_TOKEN });

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
	const response = await fetch('http://localhost:8080/user/login', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (response.ok) {
		const { token } = await response.json();
		window.localStorage.setItem(TOKEN_KEY, token);
		dispatch(setToken(token));
	}
};

export const signup = (email, password) => async (dispatch) => {
	const response = await fetch('http://localhost:8080/user/sign-up', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (response.ok) {
		const { token } = await response.json();
		window.localStorage.setItem(TOKEN_KEY, token);
		dispatch(setToken(token));
		window.location.href = '/browse';
	}
};

export const logout = () => async (dispatch, getState) => {
	window.localStorage.removeItem(TOKEN_KEY);
	dispatch(removeToken());
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
		case SET_TOKEN: {
			return {
				...state,
				token: action.token,
			};
		}
		case REMOVE_TOKEN: {
			const newState = { ...state };
			delete newState.token;
			return newState;
		}
		default: {
			return state;
		}
	}
};
