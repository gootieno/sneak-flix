const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

const updatePassword = (value) => ({
	type: UPDATE_PASSWORD,
	value,
});

const updateEmail = (value) => ({
	type: UPDATE_EMAIL,
	value,
});

export const actions = {
	updateEmail,
	updatePassword,
};
const TOKEN_KEY = 'authentication/token';
const SET_TOKEN = 'SNEAK_FLIX/SET_TOKEN';
export const setToken = token => ({ type: SET_TOKEN, token });

export const login = (email, password) => async dispatch => {
	const response = await fetch(`http://localhost:8000/login`, {
	  method: 'put',
	  headers: { 'Content-Type': 'application/json' },
	  body: JSON.stringify({ email, password }),
	});
  
	if (response.ok) {
	  const { token } = await response.json();
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
