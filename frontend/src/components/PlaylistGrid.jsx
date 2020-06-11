import React from 'react';
import VideoBox from './VideoBox';
import Trending from './Trending';

export default function PlaylistGrid() {
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
				<VideoBox />
			</div>
			<h3>Comedy</h3>
			<div className='playlist-container__comedy'>
				<VideoBox />
			</div>
			<h3>Drama</h3>
			<div className='playlist-container__drama'>
				<VideoBox />
			</div>
			<h3>Adventure</h3>
			<div className='playlist-container__adventure'>
				<VideoBox />
			</div>
		</div>
	);
}
