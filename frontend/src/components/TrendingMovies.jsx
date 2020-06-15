import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
			<CarouselProvider
				naturalSlideWidth={90}
				naturalSlideHeight={10}
				totalSlides={2.7}
			>
				<Slider>
					<span className='playlist-container'>
						{this.props.movies.reverse().map((movie, idx) => (
							<Slide index={idx}>
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
							</Slide>
						))}
					</span>
				</Slider>
				<div className='button-slider'>
					<ButtonBack className='button-left'>Back</ButtonBack>
					<ButtonNext className='button-right'>Next</ButtonNext>
				</div>
			</CarouselProvider>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: Object.values(state.movies),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
