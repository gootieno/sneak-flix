import React from 'react';
import Trending from './TrendingMovies';
import ActionMovies from './ActionMovies';
import ComedyMovies from './ComedyMovies';

export default function MoviePlaylistGrid() {
	return (
		<div>
			<h3>Trending Now</h3>
			<div className='carousel'>
				<Trending />
			</div>
			<h3>Action</h3>
			<div className='carousel'>
				<ActionMovies />
			</div>
			<h3>Comedy</h3>
			<div className='carousel'>
				<ComedyMovies />
			</div>
		</div>
	);
}
