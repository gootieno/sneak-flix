import React, { Component } from 'react';
import NavBar from './NavBar';
import ActionMovies from './ActionMovies';

const Browse = () => (
	<div>
		<NavBar />
		<ActionMovies />
	</div>
);

//Map videos into each category
export default Browse;
