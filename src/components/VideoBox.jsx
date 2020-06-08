import React from 'react';

export default function VideoBox() {
	return (
		<div>
			<video className='playlist-container__video' width='295' height='160'>
				<source type='video/mp4' src='../videos/small.mp4' />
			</video>
			<video className='playlist-container__video' width='295' height='160'>
				<source type='video/mp4' src='../videos/small.mp4' />
			</video>
			<video className='playlist-container__video' width='295' height='160'>
				<source type='video/mp4' src='../videos/small.mp4' />
			</video>
			<video className='playlist-container__video' width='295' height='160'>
				<source type='video/mp4' src='../videos/small.mp4' />
			</video>
		</div>
	);
}
