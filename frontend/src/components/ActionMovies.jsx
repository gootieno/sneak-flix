import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';
import { getActionMovies, getMovieById } from '../store/reducers/movies';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ActionMovies extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}

	handleVideoMouseOver = (e) => {
		console.log(e.target.id);
		document.getElementById(e.target.id).controls = true;
		e.target.muted = false;
		e.target.play();
	};

	handleVideoMouseLeave = (e) => {
		e.target.load();
		document.getElementById(e.target.id).controls = false;
	};

	render() {
		return (
			<CarouselProvider
				naturalSlideWidth={90}
				naturalSlideHeight={10}
				totalSlides={1.48}
			>
				<Slider>
					<div className='playlist-video-container'>
						{this.props.movies.map((movie, idx) => (
							<Slide index={idx}>
								<div className='playlist-video-container__video'>
									<video
										muted={false}
										onMouseOver={this.handleVideoMouseOver}
										onMouseLeave={this.handleVideoMouseLeave}
										poster={movie.image}
										key={idx}
										height='180'
										width='350'
										id={movie.id}
										className='playlist-video'
									>
										<source type='video/mp4' src={movie.source} />
									</video>
								</div>
							</Slide>
						))}
					</div>
				</Slider>
				<div className='button-slider'>
					<ButtonBack className='button-left'>Back</ButtonBack>
					<ButtonNext className='button-right'>Next</ButtonNext>
				</div>
			</CarouselProvider>
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
