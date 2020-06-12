import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';
import { getActionMovies } from '../store/reducers/movies';

class ActionMovies extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
	render() {
		return (
			<div>
				{this.props.movies.map((movie) => (
					<video
						key={movie.id}
						height='180'
						width='350'
						className='playlist-container__video'
						controls
					>
						<source type='video/mp4' src={movie.source} />
					</video>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: getActionMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionMovies);
