import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/Sneakflix.png';
import Logout from './Logout';

export default function NavBar() {
	return (
		<div className='navbar-container'>
			<nav className='navbar-container__left-links'>
				<span>
					<a href='/browse'>
						<img src={logo} alt='logo' />
					</a>
				</span>
				<NavLink className='navbar-container__navs' to='/browse'>
					Home
				</NavLink>

				<NavLink className='navbar-container__navs' to='/movies'>
					Movies
				</NavLink>
				<NavLink className='navbar-container__navs' to='/my-list'>
					My List
				</NavLink>
			</nav>
			<div className='navbar-container__right-search-profile'>
				{/* <span className='navbar-container__search'>
					<input />
				</span> */}
				<span>
					<Logout />
				</span>
			</div>
		</div>
	);
}
