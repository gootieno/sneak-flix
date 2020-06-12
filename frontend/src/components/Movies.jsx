import React, { Component } from 'react';
import NavBar from './NavBar';
import PlaylistGrid from './PlaylistGrid';
import { connect } from 'react-redux';
import { fetchMovies } from '../utils/apiUtil';

class Movies extends Component {
	componentDidMount() {
		this.props.fetchMovies();
	}
	render() {
		return (
			<div>
				<NavBar />
				<h3 width='350px' height='180px' className='category-title'>
					Movies
				</h3>
				<PlaylistGrid />
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
