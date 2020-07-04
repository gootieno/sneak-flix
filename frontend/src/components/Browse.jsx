import React, { Component } from 'react';
import NavBar from './NavBar';
import MoviePlaylistGrid from './MoviePlaylistGrid';

export default class Browse extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<MoviePlaylistGrid />
			</div>
		);
	}
}

//Map videos into each category
