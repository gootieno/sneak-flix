import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';

import './index.css';
import './index.css';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();

ReactDOM.render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>,
	document.getElementById('root')
);
