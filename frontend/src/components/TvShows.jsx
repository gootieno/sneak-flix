import React, { Component } from 'react';
import NavBar from './NavBar';

export default class TvShows extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<h3 className='category-title'>TV Shows</h3>
			</div>
		);
	}
}
