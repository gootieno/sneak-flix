import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';
import { getComedyMovies } from '../store/reducers/movies';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class ComedyMovies extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
	handleVideoMouseOver = (e) => {
		e.target.muted = false;
		e.target.play();
		document.getElementById(e.target.id).controls = true;
	};

	handleVideoMouseLeave = (e) => {
		e.target.load();
	};

	render() {
		return (
			<CarouselProvider
				naturalSlideWidth={90}
				naturalSlideHeight={10}
				totalSlides={1.28}
			>
				<Slider>
					<span className='playlist-video-container'>
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
	movies: getComedyMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComedyMovies);
