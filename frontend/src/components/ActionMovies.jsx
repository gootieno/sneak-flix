import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';
import { getActionMovies, getMovieById } from '../store/reducers/movies';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';

const ActionMovies = (props) => {
	// useEffect(() => {
	// 	props.fetchMovies();
	// }, []);

	const handleVideoMouseOver = (e) => {
		console.log(e.target.id);
		// document.getElementById(e.target.id).controls = true;
		// e.target.muted = false;
		// e.target.play();
		e.target
			? (e.target.className = classes.imageCover)
			: (e.target.className = '');
	};

	const handleVideoMouseLeave = (e) => {
		e.target.load();
		// document.getElementById(e.target.id).controls = false;
	};

	const useStyles = makeStyles({
		actionMoviesContainer: { marginLeft: '30px', marginRight: '30px' },

		actionMovieContainerTitle: {
			marginLeft: '60px',
			marginBottom: '0px',
		},

		imageCover: {
			width: '340px',
			height: '100%',
			padding: '30px 20px 30px 20px',
			objectFit: 'cover',
			'&:hover': {
				transform: 'scale(1.1,1.1)',
				transitionDuration: '.8s',
			},
		},
		videoContainer: {
			width: '280px',
			height: 'auto',
		},
		playlistGrid: {
			marginLeft: '20px',
			marginRight: '20px',
		},
	});

	const images = [
		'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
	];

	const items = [1, 2, 3, 4, 5, 6];

	const classes = useStyles();

	const settings = {
		slidesToShow: 5,
		slidesToScroll: 1,
		draggable: true,
		fade: false,
		adaptiveHeight: true,
		arrows: true,
	};

	return (
		<div className={classes.actionMoviesContainer}>
			<h2 className={classes.actionMovieContainerTitle}>Action Movies</h2>
			<div className={classes.sliderContainer}>
				<Slider {...settings} className={classes.playlistGrid}>
					{images.map((item, i) => (
						<Image
							key={i * 2}
							src={item}
							alt={i}
							className={classes.imageCover}
							onMouseOver={handleVideoMouseOver}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
};

const mapStateToProps = (state, movieId) => ({
	movies: getActionMovies(state),
	movieId: getMovieById(state, movieId),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionMovies);
