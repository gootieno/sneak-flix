import React from 'react';

export default function VideoBox() {
	return (
		<div className='videobox-container'>
			<video
				className='playlist-container__video'
				width='295'
				height='160'
				controls
			>
				<source type='video/mp4' src='' />
			</video>
			<video
				className='playlist-container__video'
				width='295'
				height='160'
				controls
			>
				<source type='video/mp4' src='' />
			</video>
			<video
				className='playlist-container__video'
				width='295'
				height='160'
				controls
			>
				<source type='video/mp4' src='' />
			</video>
			<video
				className='playlist-container__video'
				width='295'
				height='160'
				controls
			>
				<source type='video/mp4' src='' />
			</video>
		</div>
	);
}
