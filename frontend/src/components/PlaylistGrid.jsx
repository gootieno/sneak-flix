import React from 'react';
import Trending from './TrendingMovies';
import ActionMovies from './ActionMovies';
import ComedyMovies from './ComedyMovies';

export default function MoviePlaylistGrid() {
	return (
		<div className='playlist-container'>
			<video className='playlist-container__video' width='1600' height='480'>
				<source type='video/mp4' src='../videos/small.mp4' />
			</video>
			<h3>Trending Now</h3>
			<div className='playlist-container__action'>
				<Trending />
			</div>
			<h3>Action</h3>
			<div className='playlist-container__action'>
				<ActionMovies />
			</div>
			<h3>Comedy</h3>
			<div className='playlist-container__comedy'>
				<ComedyMovies />
			</div>
		</div>
	);
}
