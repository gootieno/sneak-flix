import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<div className='navbar-container'>
			<nav className='navbar-container__left-links'>
				<span>SNEAKFLIX</span>
				<NavLink className='navbar-container__navs' to='/browse'>
					Home
				</NavLink>
				<NavLink className='navbar-container__navs' to='/tv-shows'>
					TV Shows
				</NavLink>
				<NavLink className='navbar-container__navs' to='/movies'>
					Movies
				</NavLink>
				<NavLink className='navbar-container__navs' to='/my-list'>
					My List
				</NavLink>
			</nav>
			<div className='navbar-container__right-search-profile'>
				<span className='navbar-container__search'>
					<input />
				</span>
				<span>profile here</span>
			</div>
		</div>
	);
}
