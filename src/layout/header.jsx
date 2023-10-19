import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../public/images/logo.png'
import '../global.scss'

function Header() {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<header className='header'>
			<div className='header_wrap container'>
				<Link to='/' className='header_left'>
					<img src={logo} alt='logo' />
				</Link>
				<div className='header_center_wrap'>
					<button className='header_btn'>
						<div className='burger_wrap'>
							<span className='burger1'></span>
							<span className='burger2'></span>
							<span className='burger3'></span>
						</div>
						Categories
					</button>
					<div className='header_center'>
						<NavLink to={'/'}>Zapchastlar</NavLink>
						<NavLink to={'/'}>Kompaniya</NavLink>
						<NavLink to={'/contact'}>Do’konlar</NavLink>
						<NavLink to={'/news'}>Yangiliklar</NavLink>
						<NavLink to={'/contact'}>Kontaktlar</NavLink>
					</div>
				</div>
				<label className='header_label'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
					>
						<path
							d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
							stroke='#667085'
							stroke-width='1.66667'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<input placeholder='search' className='header_search' />
				</label>
				<div className='mobile_header'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
					>
						<path
							d='M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z'
							stroke='#667085'
							stroke-width='1.66667'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<button className='header_btn_mobile' onClick={toggleMobileMenu}>
						<div className='burger_wrap' onClick={toggleMobileMenu}>
							<span
								className={`burger1 ${isMobileMenuOpen ? 'open' : ''}`}
							></span>
							<span
								className={`burger2 ${isMobileMenuOpen ? 'open' : ''}`}
							></span>
							<span
								className={`burger3 ${isMobileMenuOpen ? 'open' : ''}`}
							></span>
						</div>
					</button>
					<div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
						<div className='mobile_header_nav'>
							<NavLink to={'/'}>Zapchastlar</NavLink>
							<NavLink to={'/'}>Kompaniya</NavLink>
							<NavLink to={'/contact'}>Do’konlar</NavLink>
							<NavLink to={'/news'}>Yangiliklar</NavLink>
							<NavLink to={'/contact'}>Kontaktlar</NavLink>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
