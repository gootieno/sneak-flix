import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';
import { getActionMovies, getMovieById } from '../store/reducers/movies';

class ActionMovies extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}

	state = {
		hover: false,
	};

	setVideoControlAttribute = (e) => {
		document.getElementById(e.target.id).controls = true;
		document.getElementById(e.target.id).autoPlay = true;
	};

	removeVideoControlAttribute = (e) => {
		document.getElementById(e.target.id).controls = false;
	};

	render() {
		return (
			<div id='myCarousel' className='playlist-container' data-ride='carousel'>
				<a
					class='left carousel-control'
					href='#myCarousel'
					role='button'
					data-slide='prev'
				>
					<span
						class='glyphicon glyphicon-chevron-left'
						aria-hidden='true'
					></span>
					<span class='sr-only'>Previous</span>
				</a>
				{this.props.movies.map((movie, idx) => (
					<video
						data-target='#myCarousel'
						data-slide-to={idx + 1}
						onMouseOver={this.setVideoControlAttribute}
						onMouseLeave={this.removeVideoControlAttribute}
						poster={movie.image}
						key={movie.id}
						height='180'
						width='350'
						id={movie.id}
						className='playlist-container__video'
					>
						<source type='video/mp4' src={movie.source} />
					</video>
				))}
				<a
					class='right carousel-control'
					href='#myCarousel'
					role='button'
					data-slide='next'
				>
					<span
						class='glyphicon glyphicon-chevron-right'
						aria-hidden='true'
					></span>
					<span class='sr-only'>Next</span>
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
