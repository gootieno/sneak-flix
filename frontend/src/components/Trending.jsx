import React, { Component } from 'react';

export default class Trending extends Component {
	render() {
		return (
			<div>
				<video
					autoPlay
					className='playlist-container__video'
					width='295'
					height='160'
					controls
				>
					<source
						type='video/mp4'
						src='https://sneakflix.s3-us-west-1.amazonaws.com/movies/alpha-trailer-2_h1080p.mov'
					/>
				</video>
			</div>
		);
	}
}
