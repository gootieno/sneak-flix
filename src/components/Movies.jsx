import React, { Component } from 'react';
import NavBar from './NavBar';
import PlaylistGrid from './PlaylistGrid';

export default class Movies extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<h3 className='category-title'>Movies</h3>
				<PlaylistGrid />
			</div>
		);
	}
}
