import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';
import { getActionMovies, getMovieById } from '../store/reducers/movies';

class ActionMovies extends Component {
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
			<div id='myCarousel' className='playlist-container' data-ride='carousel'>
				<a
					className='left carousel-control'
					href='#myCarousel'
					role='button'
					data-slide='prev'
				>
					<span
						className='glyphicon glyphicon-chevron-left'
						aria-hidden='true'
					></span>
					<span className='sr-only'>Previous</span>
				</a>
				{this.props.movies.map((movie, idx) => (
					<video
						muted={false}
						// autoPlay={this.state.autoPlay === idx ? 'autoPlay' : ''}
						data-target='#myCarousel'
						data-slide-to={idx + 1}
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
				<a
					className='right carousel-control'
					href='#myCarousel'
					role='button'
					data-slide='next'
				>
					<span
						className='glyphicon glyphicon-chevron-right'
						aria-hidden='true'
					></span>
					<span className='sr-only'>Next</span>
				</a>
			</div>
		);
	}
}

const mapStateToProps = (state, movieId) => ({
	movies: getActionMovies(state),
	movieId: getMovieById(state, movieId),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionMovies);
