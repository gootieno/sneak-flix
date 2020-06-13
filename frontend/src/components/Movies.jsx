import React, { Component } from 'react';
import NavBar from './NavBar';
import MoviePlaylistGrid from './MoviePlaylistGrid';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';

class Movies extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
	render() {
		return (
			<div className='movies-container'>
				<NavBar />
				<h2 className='category-title'>Movies</h2>
				<MoviePlaylistGrid />
				<div className='bottom'></div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		movies: () => Object.values(state.entities.movies),
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchMovies: () => dispatch(fetchMovies()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
