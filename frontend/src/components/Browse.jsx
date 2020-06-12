import React, { Component } from 'react';
import NavBar from './NavBar';
import PlaylistGrid from './PlaylistGrid';

export default class Browse extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<PlaylistGrid />
			</div>
		);
	}
}

//Map videos into each category
