import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';
import { getComedyMovies } from '../store/reducers/movies';

class ComedyMovies extends Component {
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
	movies: getComedyMovies(state),
});

const mapDispatchToProps = (dispatch) => ({
	fetchMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComedyMovies);
