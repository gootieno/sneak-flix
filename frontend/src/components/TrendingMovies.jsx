import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';

class Trending extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
	handleVideoMouseOver = (e) => {
		e.target.muted = false;
		e.target.play();
		// document.getElementById(e.target.id).autoPlay = true;
	};

	handleVideoMouseLeave = (e) => {
		e.target.load();
	};

	render() {
		return (
			<div className='playlist-container'>
				{this.props.movies.reverse().map((movie, idx) => (
					<video
						muted={false}
						onMouseOver={this.handleVideoMouseOver}
						onMouseLeave={this.handleVideoMouseLeave}
						poster={movie.image}
						key={idx}
						height='180'
						width='350'
						id={movie.id}
						className='playlist-container__video'
					>
						<source type='video/mp4' src={movie.source} />
					</video>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: Object.values(state.entities.movies),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
