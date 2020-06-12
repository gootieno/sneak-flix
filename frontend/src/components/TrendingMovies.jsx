import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';

class Trending extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
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
				{this.props.movies.reverse().map((movie, idx) => (
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

const mapStateToProps = (state) => ({
	movies: Object.values(state.entities.movies),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
